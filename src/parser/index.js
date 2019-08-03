const validator = require('./validator');
const fileParser = require('./fileParser');

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

  console.log('VERSION', version);
  return {
    error: undefined,
  };
};

module.exports = {
  parse,
};
