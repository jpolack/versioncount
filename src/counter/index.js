const { increment } = require('./incrementor');

const count = (version, countUp, path) => {
  const incrementedVersion = increment(version, countUp);

  console.log(incrementedVersion);

  return `${version.major}.${version.minor}.${version.patch}`;
};

module.exports = {
  count,
};
