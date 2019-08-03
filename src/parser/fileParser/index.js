const fs = require('fs');

const findJsonVersion = (content) => {
  let jsonContent;
  try {
    jsonContent = JSON.parse(content);
  } catch (e) {
    return {
      error: 'Not a valid json',
      version: undefined,
    };
  }

  const { version } = jsonContent;

  if (!version) {
    return {
      error: 'No version found',
      version: undefined,
    };
  }

  return {
    error: undefined,
    version,
  };
};

const findVersion = (content, ext) => {
  if (ext === '') {
    return {
      error: undefined,
      version: content,
    };
  }

  if (ext === '.json') {
    return findJsonVersion(content);
  }

  throw new Error(`Unknown File extension: ${ext}`);
};

const parse = (path, pathMeta) => {
  const fileContent = fs.readFileSync(path);

  return findVersion(String(fileContent), pathMeta.ext);
};

module.exports = {
  parse,
};
