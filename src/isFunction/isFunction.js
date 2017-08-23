/**
 * Simple function which is checking if given argument is a function
 * 
 * @param {any} item anything which should be checked if is function
 * @example
 * const noop = () => {};
 * isFunction(noop); // returns true
 * @example
 * function noop() {};
 * isFunction(noop); // returns true
 * @example
 * const noop = function() {};
 * isFunction(noop); // returns true
 * @example
 * isFunction({}); // returns false
 * @example
 * isFunction('string'); // returns false
 * @returns {boolean} true if argument is function, false if not
 */
const isFunction = item => item && {}.toString.call(item) === '[object Function]';

module.exports = isFunction;
