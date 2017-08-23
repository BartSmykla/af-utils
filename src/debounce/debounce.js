/**
 * Simple function debouncing
 * 
 * @param {function} func dunction which will be debounced
 * @param {number} wait number of milliseconds to debounce
 * @param {any} [immediate] optional argument, which if set to true will immediately fire debounced function
 */
const debounce = (func, wait, immediate) => {
  let timeout;

  return (...args) => {
    const later = () => {
      timeout = null;

      if (!immediate) {
        func(...args);
      }
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func(...args);
    }
  };
};

module.exports = debounce;
