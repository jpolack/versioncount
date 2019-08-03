const fs = require('fs');
const pathUtils = require('path');

const supportedFileTypes = {
  '.json': true,
  '': true,
};


const fileExist = filePath => new Promise((resolve, reject) => {
  fs.access(filePath, fs.F_OK, (err) => {
    if (err) {
      reject(err);
    }
    resolve();
  });
});

const validatePath = async (path) => {
  if (!path) {
    return {
      error: 'no path passed',
      parsedPath: undefined,
    };
  }

  let parsedPath;

  try {
    parsedPath = pathUtils.parse(path);
  } catch (e) {
    return {
      error: 'path is not valid',
      parsedPath: undefined,
    };
  }

  if (!supportedFileTypes[parsedPath.ext]) {
    return {
      error: 'file type is not supported',
      parsedPath: undefined,
    };
  }

  try {
    await fileExist(path);
  } catch (e) {
    return {
      error: 'path is not reachable',
      parsedPath: undefined,
    };
  }

  return {
    error: undefined,
    parsedPath,
  };
};

module.exports = {
  validatePath,
};
