const { resolve } = require('path');
const executePath = process.cwd();

module.exports = {
  BUILD_PATH: resolve(executePath, 'svgs'),
  OUTPUT_PATH: resolve(executePath, 'build'),
  UNICODE_PREFIX: '&#x',
};
