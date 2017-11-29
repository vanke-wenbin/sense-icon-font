const { resolve } = require('path');
const fs = require('fs');
const fontCarrier = require('font-carrier');

const { SVG_PATH, OUTPUT_BUILD_PATH, OUTPUT_FONT_PATH, UNICODE_PREFIX } = require('./conf');

if (!fs.existsSync(OUTPUT_BUILD_PATH)) {
  fs.mkdirSync(OUTPUT_BUILD_PATH);
}

if (!fs.existsSync(OUTPUT_FONT_PATH)) {
  fs.mkdirSync(OUTPUT_FONT_PATH);
}

module.exports = (name) => {
  const path = resolve(SVG_PATH, name);
  const stats = fs.statSync(path);
  if (stats.isDirectory()) {
    const font = fontCarrier.create();
    const unicodeSymbol = name[0];

    const files = fs.readdirSync(path);
    files.forEach((file, index) => {
      const code = `00${index}`.substr(-3);
      const unicode = `${UNICODE_PREFIX}${unicodeSymbol}${code}`;

      const filePath = resolve(path, file);
      const svg = fs.readFileSync(filePath).toString();

      font.setSvg(unicode, svg);
    });

    font.output({
      path: resolve(OUTPUT_FONT_PATH, `sense-font-${name}`),
    });
  }
};
