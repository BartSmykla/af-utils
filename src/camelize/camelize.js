/**
 * Simple function for change string from snake_case to camelCase
 * 
 * @param {string} str - string which will be camelized
 * @returns {string} camelized string
 */
const camelize = str =>
  str.replace(/^([A-Z])|[\s-_](\w)/g, (match, p1, p2) => {
    if (p2)
      return p2.toUpperCase();

    return p1.toLowerCase();
  });

module.exports = camelize;
