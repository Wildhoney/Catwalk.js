import {SCHEMA} from './registry';

/**
 * @method isFunction
 * @param {*} fn
 * @return {Boolean}
 */
export function isFunction(fn) {
    return typeof fn === 'function';
}

/**
 * @method hasSchema
 * @param {*} fn
 * @return {Boolean}
 */
export function hasSchema(fn) {
    return fn[SCHEMA] !== 'undefined';
}

/**
 * @method hasPrimaryKey
 * @param {Object} properties
 * @return {Boolean}
 */
//export function hasPrimaryKey(properties) {
//
//    return Object.keys(properties).some(key => {
//        return properties[key].options & option.PRIMARY_KEY;
//    });
//
//}
