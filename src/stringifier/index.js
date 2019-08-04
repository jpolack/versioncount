const isValidVersionNumber = num => Number(num) >= 0;

const stringify = (version) => {
  if (!version
    || !isValidVersionNumber(version.major)
    || !isValidVersionNumber(version.minor)
    || !isValidVersionNumber(version.patch)
  ) {
    throw new Error(`"${JSON.stringify(version, null, 2)}" is not a valid version`);
  }

  if (version.releaseCandidate) {
    return `${version.major}.${version.minor}.${version.patch}-rc${version.releaseCandidate}`;
  }

  return `${version.major}.${version.minor}.${version.patch}`;
};

module.exports = {
  stringify,
};
