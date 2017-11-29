const fs = require('fs');

const {
  UNICODE_FILE_PATH,
} = require('./conf');

let unicodeData = {};
if (fs.existsSync(UNICODE_FILE_PATH)) {
  unicodeData = JSON.parse(fs.readFileSync(UNICODE_FILE_PATH, 'utf8') || '{}');
}

function getAll() {
  return unicodeData;
}

function getDataByName(name) {
  return unicodeData[name];
}

function saveData(name, data) {
  const existData = getDataByName(name);
  unicodeData[name] = Object.assign({}, existData, data);
  fs.writeFileSync(UNICODE_FILE_PATH, JSON.stringify(unicodeData));
}

module.exports = {
  getAll,
  getDataByName,
  saveData,
};
