const validator = require('./validator');
const fileParser = require('./fileParser');
const versionParser = require('./versionParser');

const parse = async (path) => {
  const {
    error: validationError,
    parsedPath,
  } = await validator.validatePath(path);

  if (validationError) {
    return {
      error: validationError,
    };
  }

  const {
    error: parseError,
    version,
  } = fileParser.parse(path, parsedPath);

  if (parseError) {
    return {
      error: parseError,
    };
  }

  const {
    error: versionParseError,
    version: parsedVersion,
  } = versionParser.parse(version);

  if (versionParseError) {
    return {
      error: versionParseError,
    };
  }

  console.log('VERSION', parsedVersion);
  return {
    error: undefined,
  };
};

module.exports = {
  parse,
};
