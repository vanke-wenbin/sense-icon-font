const fs = require('fs');

const { BUILD_PATH } = require('./conf');
const createFont = require('./create');

fs.access(BUILD_PATH, fs.constants.R_OK, (err) => {
  if (err) {
    throw new Error(err.message);
  }

  fs.readdir(BUILD_PATH, (err, dirs) => {
    if (err) {
      console.error('Error happened when reading dir: ', path, err);
    }

    dirs.forEach((dir) => {
      createFont(dir);
    });
  });
});
