const { expect } = require('chai');
const { withData } = require('leche');

const { isFunction } = require('../../');

describe('isFunction', () => {
  const args = {
    true: [
      () => {},
      function() {},
      function fs() {},
    ],
    false: [
      {},
      'string',
      undefined,
      null,
      new Date(),
      1,
      [],
      [1,2,3,4],
      Symbol(''),
    ],
  }

  withData(args.true, (arg) => {
    it('should return true when passed argument is a function', () => {
      expect(isFunction(arg)).to.be.equal(true);
    });
  });

  withData(args.false, (arg) => {
    it('should return false when passed argument is any other (than function) type', () => {
      expect(isFunction(arg)).to.be.equal(false);
    });
  });
});
