const { resolve } = require('path');
const executePath = process.cwd();

const OUTPUT_BUILD_PATH = resolve(executePath, 'build');

module.exports = {
  SVG_PATH: resolve(executePath, 'svgs'),
  OUTPUT_BUILD_PATH,
  OUTPUT_FONT_PATH: resolve(OUTPUT_BUILD_PATH, 'font'),
  UNICODE_PREFIX: '&#x',
};
