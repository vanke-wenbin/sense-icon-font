const fs = require('fs');

const { SVG_PATH } = require('./conf');
const createFont = require('./create');

fs.access(SVG_PATH, fs.constants.R_OK, (err) => {
  if (err) {
    throw new Error(err.message);
  }

  fs.readdir(SVG_PATH, (err, dirs) => {
    if (err) {
      console.error('Error happened when reading dir: ', path, err);
    }

    dirs.forEach((dir) => {
      createFont(dir);
    });
  });
});
