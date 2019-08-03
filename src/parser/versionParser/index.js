const versionRegex = /^([0-9]+).([0-9]+).([0-9]+)(-rc([0-9]+))?$/i;

const parse = (version) => {
  const match = versionRegex.exec(version);

  if (!match) {
    return {
      error: 'not a valid versioning syntax',
      version: {},
    };
  }

  return {
    error: undefined,
    version: {
      major: Number(match[1]),
      minor: Number(match[2]),
      patch: Number(match[3]),
      releaseCandidate: match[5] && Number(match[5]),
    },
  };
};

module.exports = {
  parse,
};
