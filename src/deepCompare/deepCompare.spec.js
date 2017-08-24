const { expect } = require('chai');
const { withData } = require('leche');

const { deepCompare } = require('../../');

describe('deepCompare', () => {
  const data = [
    [{}, {}],
    [{ foo: 'bar' }, { 'foo': 'bar' }],
    [[], []],
    ['string', 'string'],
    [5, 5],
    [[1,2,3,4,5], [1,2,3,4,5]],
    [null, null],
    [undefined, undefined],
    [NaN, NaN],
    [Infinity, Infinity],
  ];

  const wrongData = [
    [{ bar: 'foo' }, { foo: 'bar' }],
    [[], {}],
    [undefined, null],
    [NaN, 0],
    [1, 2],
    ['0', 0],
  ];

  withData(data, (arg1, arg2) => {
    it('should return true if given args are equal', () => {
      expect(deepCompare(arg1, arg2)).to.be.equal(true);
    });
  });

  withData(wrongData, (arg1, arg2) => {
    it('should return false if given args are not equal', () => {
      expect(deepCompare(arg1, arg2)).to.be.equal(false);
    });
  });

  it('should return true if there is no args passed', () => {
    expect(deepCompare()).to.be.equal(true);
  });
});
