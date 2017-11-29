const fs = require('fs');
const { resolve } = require('path');

const packageFile = resolve(process.cwd(), 'package.json');

const {
  EXPORT_PATH,
  EXPORT_CSS_PATH,
  EXPORT_PACKAGE_PATH,
} = require('../conf');
const unicodeHelper = require('../unicode');

const getCssTemplate = require('./css-template');

if (!fs.existsSync(EXPORT_PATH)) {
  fs.mkdirSync(EXPORT_PATH);
}

const allUnicodeData = unicodeHelper.getAll();
const cssContent = [];
Object.keys(allUnicodeData).forEach((key) => {
  const unicodeData = allUnicodeData[key];
  const cssTemplate = getCssTemplate(key, unicodeData);
  cssContent.push(cssTemplate);
})

fs.writeFileSync(EXPORT_CSS_PATH, cssContent.join(''), 'utf8');


// add package.json
const packageData = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
const {
  name,
  version,
  description,
  main,
  author,
  license,
} = packageData;
const exportPackageData = {
  name,
  version,
  description,
  main,
  author,
  license,
};
fs.writeFileSync(EXPORT_PACKAGE_PATH, JSON.stringify(exportPackageData, null, 4), 'utf8');
