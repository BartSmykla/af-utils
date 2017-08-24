const { expect } = require('chai');
const { withData } = require('leche');

const { genUuid } = require('../../');

describe('genUuid', () => {
  const uuids = [];

  for (let i = 0; i < 10; i++)
    uuids.push(genUuid());

  withData(uuids, (arg) => {
    it('should return a string of length 36', () => {
      expect(arg).to.have.lengthOf(36);
    });
  });

  withData(uuids, (arg) => {
    it('first parth should have length of 8, second, third and fourth 4 and fifth 12', () => {
      const parts = arg.split('-');

      expect(parts).to.have.lengthOf(5);
      expect(parts[0]).to.have.lengthOf(8);
      expect(parts[1]).to.have.lengthOf(4);
      expect(parts[2]).to.have.lengthOf(4);
      expect(parts[3]).to.have.lengthOf(4);
      expect(parts[4]).to.have.lengthOf(12);
    });
  });

  withData(uuids, (arg) => {
    it('14th char should always be equal \'4\'', () => {
      expect(arg[14]).to.be.equal('4');
    });
  });
});
