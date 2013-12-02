(function($window, $catwalk) {

    $window.colours = $catwalk.collection('colours', {

        /**
         * @property _primaryKey
         * @type {String}
         * @protected
         */
        _primaryKey: 'id',

        /**
         * @property id
         * @type {Number}
         */
        id: $catwalk.attribute.integer,

        /**
         * @property colour
         * @type {String}
         */
        colour: $catwalk.attribute.string

    });

    $window.cats = $catwalk.collection('cats', {

        /**
         * @property _primaryKey
         * @type {String}
         * @protected
         */
        _primaryKey: 'id',

        /**
         * @property _relationships
         * @type {Object}
         * @protected
         */
        _relationships: {

            /**
             * @property colours
             * @type {Object}
             */
            colours: $catwalk.relationship.hasMany({
                foreignKey: 'colour_id'
            })

        },

        /**
         * @property id
         * @type {Number}
         */
        id: $catwalk.attribute.integer,

        /**
         * @property name
         * @type {String}
         */
        name: $catwalk.attribute.string,

        /**
         * @property age
         * @type {Number}
         */
        age : $catwalk.attribute.integer

    });

})(window, window.catwalk);