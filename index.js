const path = require('path');
const fs = require('fs');

const normalizedPath = path.join(__dirname);
const srcPath = path.join(normalizedPath, 'src');

const required = {};

fs
  .readdirSync(srcPath)
  .forEach((dir) => {
    const isDir = path.extname(dir) === '';

    if (isDir) {
      const utilDir = fs.readdirSync(path.join(srcPath, dir));
      const isProperUtil = utilDir.includes(`${dir}.js`);

      if (isProperUtil)
        Object.assign(required, require(`./src/${dir}/${dir}.js`));
    }
  });

  module.exports = required;
