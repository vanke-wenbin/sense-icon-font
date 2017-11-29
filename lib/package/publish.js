const { exec } = require('child_process');

const {
  EXPORT_PATH,
} = require('../conf');

exec(`cd ${EXPORT_PATH} && npm publish --force --registry http://npm.bu6.io`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
