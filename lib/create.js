const { resolve } = require('path');
const fs = require('fs');
const fontCarrier = require('font-carrier');

const { BUILD_PATH, OUTPUT_PATH, UNICODE_PREFIX } = require('./conf');

module.exports = (name) => {
  const path = resolve(BUILD_PATH, name);
  const stats = fs.statSync(path);
  if (stats.isDirectory()) {
    const font = fontCarrier.create();
    const unicodeFlag = name[0];

    const files = fs.readdirSync(path);
    files.forEach((file, index) => {
      const number = `00${index}`.substr(-3);
      const unicode = `${UNICODE_PREFIX}${unicodeFlag}${number}`;

      const filePath = resolve(path, file);
      const svg = fs.readFileSync(filePath).toString();

      font.setSvg(unicode, svg);
    });

    font.output({
      path: resolve(OUTPUT_PATH, `sense-font-${name}`),
    });
  }
};
