const { expect } = require('chai');
const sinon = require('sinon');
const { withData } = require('leche');

const { debounce } = require('../../');

const noop = () => {};

describe('debounce', () => {
  it('should return a function', () => {
    const debounced = debounce(noop);

    expect(debounced).to.be.a('function');
  });

  it('should call the function from first argument after' +
    'ammount of time in milliseconds in second argument',
  (callback) => {
    const spy = sinon.spy();
    const debouncedFn = debounce(spy, 100);

    debouncedFn();

    expect(spy.notCalled).to.be.equal(true);

    setTimeout(() => {
      expect(spy.calledOnce).to.be.equal(true);
      callback();
    }, 100);
  });

  it('should call the function from first argument immediately if fird argument' + 
    'will be set to true',
  () => {
    const spy = sinon.spy();
    const debouncedFn = debounce(spy, 100, true);

    debouncedFn();

    expect(spy.calledOnce).to.be.equal(true);
  });

  it('should call the function from first argumentafter time in milliseconds from' + 
    'second argument after last call of debounced function in time range smaller' +
    'that second argument',
  (callback) => {
    const spy = sinon.spy();
    const debouncedFn = debounce(spy, 100);
    const debouncedFnSpy = sinon.spy(debouncedFn);

    debouncedFnSpy();

    setTimeout(debouncedFnSpy, 10);
    setTimeout(debouncedFnSpy, 20);
    setTimeout(debouncedFnSpy, 30);
    setTimeout(debouncedFnSpy, 90);

    expect(spy.notCalled).to.be.equal(true);

    setTimeout(() => {
      expect(spy.calledOnce).to.be.equal(true);
      expect(debouncedFnSpy.callCount).to.be.equal(5);
      callback();
    }, 250);
  });
});
