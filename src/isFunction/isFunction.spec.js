const { expect } = require('chai');

const { isFunction } = require('../../');

describe('isFunction', () => {
  it('should return true when passed argumentt is a function', () => {
    const fs1 = () => {};
    const fs2 = function() {};
    function fs3() {};

    expect(isFunction(fs1)).to.be.equal(true);
    expect(isFunction(fs2)).to.be.equal(true);
    expect(isFunction(fs3)).to.be.equal(true);
  });

  it('should return false when passed argumentt is any other (than function) type', () => {
    expect(isFunction({})).to.be.equal(false);
    expect(isFunction('string')).to.be.equal(false);
    expect(isFunction(undefined)).to.be.equal(false);
    expect(isFunction(null)).to.be.equal(false);
    expect(isFunction(new Date())).to.be.equal(false);
    expect(isFunction(1)).to.be.equal(false);
  });
});
