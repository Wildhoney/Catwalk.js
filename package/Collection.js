(function($catwalk, $q) {

    "use strict";

    /**
     * @property _collections
     * @type {Object}
     * @private
     */
    var _collections = {};

    /**
     * @module Catwalk
     * @submodule Collection
     * @type {Object}
     */
    var CatWalkCollection = function CatWalkCollection(name, properties) {

        // Reset the variables because of JavaScript!
        this._crossfilter   = {};
        this._dimensions    = {};
        this._events        = {
            create:     function() {},
            read:       function() {},
            update:     function() {},
            delete:     function() {},
            content:    function() {}
        };

        // Gather the name and the properties for the models.
        this._name          = name;
        this._properties    = properties;

        // Initiate the Crossfilter and its related dimensions.
        var _crossfilter     = this._crossfilter = crossfilter([]),
            _dimensions      = this._dimensions;

        // Create the dimensions for our model properties.
        var keys = _.keys(properties);

        _.forEach(keys, function(key) {

            if (key.charAt(0) === '_' || key.charAt(0) === '$') {
                // We don't wish to include private/protected members.
                return;
            }

            // Create a dimension for each and every model property!
            _dimensions[key] = _crossfilter.dimension(function(d) {
                return d[key];
            });

        });

        // Create the dimension for the internal _catwalkId!
        _dimensions['catwalkId'] = _crossfilter.dimension(function(d) {
            return d['_catwalkId'];
        });

    };

    /**
     * @property prototype
     * @type {Object}
     */
    CatWalkCollection.prototype = {

        /**
         * @property _name
         * @type {String}
         * @private
         */
        _name: '',

        /**
         * @property events
         * @type {Object}
         */
        _events: {},

        /**
         * @property _properties
         * @type {Object}
         * @private
         */
        _properties: {},

        /**
         * @property _crossfilter
         * @type {Object}
         * @private
         */
        _crossfilter: {},

        /**
         * @property _dimensions
         * @type {Object}
         * @private
         */
        _dimensions: {},

        /**
         * @property _deletedIds
         * @type {Array}
         */
        _deletedIds: [],

        /**
         * @method createModel
         * @param model {Object}
         * @return {Object}
         */
        createModel: function createModel(model) {

            var propertyMap         = this._properties,
                createRelationship  = _.bind(this._createRelationship, this),
                relationships       = this._properties._relationships || {},
                defaultDimension    = this._dimensions.catwalkId;

            // Apply an internal Catwalk ID to the model.
            model._catwalkId = _.uniqueId('catwalk_');

            // Iterate over the properties to typecast them.
            _.forEach(model, function(value, key) {

                if (key === '_catwalkId' || key.charAt(0) === '$') {
                    // We can't do much with the internal Catwalk ID.
                    return;
                }

                // Determine if this property is part of a relationship.
                if (typeof relationships[key] === 'function') {
                    createRelationship(model, key, value);
                    return;
                }

                try {

                    // Typecast the property based on what's defined in the collection.
                    model[key] = propertyMap[key](value);

                } catch (e) {

                    // Otherwise we'll throw the exception to notify the developer that the
                    // key was missed from the collection.
                    throw 'You forgot to define the `' + key + '` property on the collection blueprint.';

                }

            });

            // Add the model to our Crossfilter, and then finalise the creation!
            this._crossfilter.add([model]);
            return this._finalise('create', defaultDimension.top(Infinity)[0]);

        },

        /**
         * @method _createReject
         * @param model {Object}
         * @return {void}
         * @private
         */
        _createReject: function _createReject(model) {
            this.deleteModel(model);
        },

        /**
         * @method updateModel
         * @param model {Object}
         * @param properties {Object}
         * @return {Object}
         */
        updateModel: function updateModel(model, properties) {

            if (!('_catwalkId' in model)) {
                throw 'You are attempting to remove a non-Catwalk model.';
            }

            // Delete the model from the Crossfilter.
            this.deleteModel(model);

            // Create the new model with the properties from the old model, overwritten with
            // the properties we're updating the model with.
            var updatedModel = _.extend(_.clone(model), properties);

            // Copy across the relationships as well.
            _.forEach(this._properties._relationships, function(relationship, property) {

                // Gather the raw relational data from the relationship meta data.
                delete updatedModel[property];
                updatedModel[property] = properties[property] ? properties[property]
                    : model._relationshipMeta[property];

            });

            // Remove the meta data for the relationships because it will be created again with
            // the `createModels` method.
            delete updatedModel._relationshipMeta;

            // Create the new model and add it to the Crossfilter.
            return this._finalise('update', this.createModel(updatedModel), model);

        },

        /**
         * @method _updateReject
         * @param model {Object}
         * @param previousModel {Object}
         * @return {void}
         * @private
         */
        _updateReject: function _updateReject(model, previousModel) {
            this.deleteModel(model);
            this._reanimateModel(previousModel);
        },

        /**
         * Bring a model back to life after being removed.
         *
         * @method _reanimateModel
         * @param model {Object}
         * @return {void}
         * @private
         */
        _reanimateModel: function _reanimateModel(model) {

            var catwalkId   = model._catwalkId,
                index       = _.indexOf(this._deletedIds, catwalkId);

            // Remove the deleted ID from the array.
            this._deletedIds.splice(index, 1);

            // Reanimate our model!
            this._dimensions.catwalkId.filterFunction(_.bind(function(d) {
                return !(_.contains(this._deletedIds, d));
            }, this));

        },

        /**
         * @method finalise
         * @param eventName {String}
         * @param model {Object}
         * @param [previousModel = {}] {Object}
         * @return {void}
         * @private
         */
        _finalise: function _finalise(eventName, model, previousModel) {

            // Create the deferred that the developer must resolve or reject.
            var deferred = $q.defer();

            /**
             * @method contentUpdated
             * @return {void}
             */
            var contentUpdated  = _.bind(function contentUpdated() {

                // Content has been updated!
                this._events.content(this.all());

            }, this);

            // Invoke the related CRUD function.
            this._events[eventName](deferred, model);

            // Delete the model as it was rejected.
            deferred.promise.fail(_.bind(function() {

                // Find the related Reject method and invoke it.
                var methodName = '_' + eventName + 'Reject';
                this[methodName](model, previousModel);

                // Voila!
                contentUpdated();

            }, this));

            // Voila!
            contentUpdated();

            return model;

        },

        /**
         * @method createModels
         * @param models {Array}
         * @return {Array}
         */
        createModels: function createModels(models) {
            return this._createModels(models, true);
        },

        /**
         * @method on
         * @param type {String}
         * @param callback {Function}
         * @return {void}
         */
        on: function on(type, callback) {
            this._events[type] = callback;
        },

        /**
         * @method watch
         * @param type {String}
         * @param callback {Function}
         * @return {void}
         */
        watch: function watch(type, callback) {
            this._events[type] = callback;
        },

        /**
         * @method deleteModel
         * @param model {Object}
         * @return {void}
         */
        deleteModel: function deleteModel(model) {

            var deletedIds = this._deletedIds;

            if (!('_catwalkId' in model)) {
                throw 'You are attempting to remove a non-Catwalk model.';
            }

            // Add the model to the deleted array.
            deletedIds.push(model._catwalkId);

            // Remove the model by its internal Catwalk ID.
            this._dimensions.catwalkId.filterFunction(function(d) {
                return !(_.contains(deletedIds, d));
            });

            return this._finalise('delete', model);

        },

        /**
         * @method _deleteReject
         * @param model {Object}
         * @return {void}
         * @private
         */
        _deleteReject: function _deleteReject(model) {

            // Since the developer has rejected this update, we'll reanimate it.
            this._reanimateModel(model);

        },

        /**
         * @method all
         * @return {Array}
         */
        all: function all() {
            var models = this._dimensions[this._properties._primaryKey].filterAll().top(Infinity);
            this._events.read(models);
            return models;
        },

        /**
         * @method size
         * @return {Number}
         */
        size: function size() {
            return this._crossfilter.size();
        },

        /**
         * @method _createRelationship
         * @param model {Object}
         * @param key {String}
         * @param ids {Array|Number|String}
         * @private
         */
        _createRelationship: function _createRelationship(model, key, ids) {

            var _relationships = this._properties._relationships || {};

            Object.defineProperty(model, key, {

                get: function() {
                    return _relationships[key](ids);
                }

            });

            // Create the relationship meta data for the actual relational IDs.
            if (!('_relationshipMeta' in model)) {
                model._relationshipMeta = {};
            }

            model._relationshipMeta[key] = ids;

        }

    };

    $catwalk.collection = function(name, properties) {

        if (properties) {
            // Instantiate a new collection because we've passed properties.
            _collections[name] = new CatWalkCollection(name, properties);
            return _collections[name];
        }

        // Otherwise we'll attempt to find an existing collection by its name.
        return _collections[name];

    };

})(window.catwalk, window.Q);