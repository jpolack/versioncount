const increment = (version, countUp) => {
  switch (countUp) {
    case 'major':
      return {
        error: undefined,
        version: {
          ...version,
          major: version.major + 1,
          minor: 0,
          patch: 0,
          releaseCandidate: undefined,
        },
      };
    case 'minor':
      return {
        error: undefined,
        version: {
          ...version,
          minor: version.minor + 1,
          patch: 0,
          releaseCandidate: undefined,
        },
      };
    case 'patch':
      return {
        error: undefined,
        version: {
          ...version,
          patch: version.patch + 1,
          releaseCandidate: undefined,
        },
      };
    case 'releaseCandidate':
    case 'rc':
      return {
        error: undefined,
        version: {
          ...version,
          releaseCandidate: (version.releaseCandidate || 0) + 1,
        },
      };
    default:
      return {
        error: 'Invalid version increment string',
        version,
      };
  }
};

module.exports = {
  increment,
};
