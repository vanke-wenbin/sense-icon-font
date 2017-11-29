const { resolve } = require('path');
const executePath = process.cwd();

const OUTPUT_BUILD_PATH = resolve(executePath, 'build');

const EXPORT_PATH = resolve(executePath, 'export');
const EXPORT_CSS_PATH = resolve(EXPORT_PATH, 'sense-icon-font.css');
const EXPORT_PACKAGE_PATH = resolve(EXPORT_PATH, 'package.json');

module.exports = {
  SVG_PATH: resolve(executePath, 'svgs'),
  OUTPUT_BUILD_PATH,
  OUTPUT_FONT_PATH: resolve(OUTPUT_BUILD_PATH, 'font'),
  UNICODE_FILE_PATH: resolve(executePath, 'unicode.json'),
  UNICODE_PREFIX: '&#x',

  EXPORT_PATH,
  EXPORT_CSS_PATH,
  EXPORT_PACKAGE_PATH,
};
