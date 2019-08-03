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
      version: {},
    };
  }

  const {
    error: parseError,
    version,
  } = fileParser.parse(path, parsedPath);

  if (parseError) {
    return {
      error: parseError,
      version: {},
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

  return {
    error: undefined,
    version: parsedVersion,
  };
};

module.exports = {
  parse,
};
