const { expect } = require('chai');
const { withData } = require('leche');

const { camelize } = require('../../');

describe('camelize', () => {
  const data = [
    ['FOOBAR', 'foobar'],
    ['FOO_BAR', 'fooBar'],
    ['foo_bar', 'fooBar'],
    ['foo_Bar', 'fooBar'],
    ['Foobar', 'foobar'],
    ['', ''],
  ];

  const wrongData = [
    {}, [], [1,2,3], 1, new Date(), undefined, null, NaN,
  ];

  withData(data, (snake, camel) => {
    it('should return camelized version of given argument', () => {
      expect(camelize(snake)).to.be.equal(camel);
    });
  });

  withData(wrongData, (arg) => {
    it('should return empty string, when given argument is not a string', () => {
      expect(camelize(arg)).to.be.equal('');
    });
  });
});
