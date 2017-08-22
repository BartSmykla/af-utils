const genUuid = () => (
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (character) => {
    const randomNumber = Math.random() * 16 | 0; // eslint-disable-line no-bitwise

    const value = character === 'x'
      ? randomNumber
      : (randomNumber & 0x3 | 0x8); // eslint-disable-line no-bitwise, no-mixed-operators

    return value.toString(16);
  })
);

module.exports = genUuid;
