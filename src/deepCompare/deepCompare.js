/**
 * Function to deep object comparision
 * 
 * @param {...Object} arg - objects which will be compared to eachself
 * @example
 * deepCompare({}, {}); // returns true
 * @example
 * const obj1 = {
 *   foo: 'bar',
 * };
 * const obj2 = {
 *   'foo': 'bar'
 * };
 * deepCompare(obj1, obj2); // returns true
 * deepCompare({ foo: true }, { bar: true }); // returns false
 * @returns {boolean} true when compared objects are equal, and false when opposite
 */
const deepCompare = (...args) => {
  let i;
  let l;
  let leftChain;
  let rightChain;

  const compare2Objects = (x, y) => {
    let p;

    if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number')
      return true;

    if (x === y)
      return true;

    if (
      (typeof x === 'function' && typeof y === 'function') ||
      (x instanceof Date && y instanceof Date) ||
      (x instanceof RegExp && y instanceof RegExp) ||
      (x instanceof String && y instanceof String) ||
      (x instanceof Number && y instanceof Number)
    ) {
      return x.toString() === y.toString();
    }

    if (!(x instanceof Object && y instanceof Object))
      return false;

    if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) // eslint-disable-line no-prototype-builtins
      return false;

    if (x.constructor !== y.constructor)
      return false;

    if (x.prototype !== y.prototype)
      return false;

    if (leftChain.includes(x) || rightChain.includes(y))
      return false;

    for (p in y) { // eslint-disable-line no-restricted-syntax
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) // eslint-disable-line no-prototype-builtins
        return false;
      else if (typeof y[p] !== typeof x[p])
        return false;
    }

    for (p in x) { // eslint-disable-line no-restricted-syntax
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) // eslint-disable-line no-prototype-builtins
        return false;
      else if (typeof y[p] !== typeof x[p])
        return false;

      switch (typeof (x[p])) {
        case 'object':
        case 'function':
          leftChain.push(x);
          rightChain.push(y);

          if (!compare2Objects(x[p], y[p]))
            return false;

          leftChain.pop();
          rightChain.pop();
          break;
        default:
          if (x[p] !== y[p])
            return false;

          break;
      }
    }

    return true;
  };

  if (args.length < 1)
    return true;

  for (i = 1, l = args.length; i < l; i++) { // eslint-disable-line no-plusplus
    leftChain = [];
    rightChain = [];

    if (!compare2Objects(args[0], args[i]))
      return false;
  }

  return true;
};

module.exports = deepCompare;
