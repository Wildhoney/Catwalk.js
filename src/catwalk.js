import * as redux from 'redux';
import thunk from 'redux-thunk';
import {throwException} from './helpers/exception';

/**
 * @method createStore
 * @param {Function} reducer
 * @param {Array} [middleware=[]]
 * @return {Object}
 */
export function createStore(reducer, middleware = []) {

    const createStoreWithMiddleware = redux.applyMiddleware(
        ...[...middleware, thunk]
    )(redux.createStore);

    return createStoreWithMiddleware((...args) => {
        return reducer(...args);
    });

}

/**
 * @method isFunction
 * @param {*} fn
 * @return {Boolean}
 */
function isFunction(fn) {
    return typeof fn === 'function';
}

/**
 * @method createSchema
 * @param {Object} schema
 * @return {Function}
 */
export function createSchema(schema) {
    return () => {};
}

/**
 * @constant actionSymbols
 * @type {WeakMap}
 */
const actionSymbols = new WeakMap();

/**
 * @method actionsFor
 * @param {Function} reducer
 * @return {Object}
 */
export function actionsFor(reducer) {

    if (!isFunction(reducer)) {
        throwException('actionsFor reference must be a reducer function');
    }

    if (!actionSymbols.has(reducer)) {

        actionSymbols.set(reducer, {
            CREATE: Symbol('create'),
            READ:   Symbol('read'),
            UPDATE: Symbol('update'),
            DELETE: Symbol('delete')
        });

    }

    return actionSymbols.get(reducer);

}
