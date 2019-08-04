const { stringify } = require('./index');

describe('versionStringifier', () => {
  it('stringifies the version', () => {
    const versionString = stringify({
      major: 1, minor: 0, patch: 0, releaseCandidate: undefined,
    });

    expect(versionString).toEqual('1.0.0');
  });

  it('stringifies the version with rc', () => {
    const versionString = stringify({
      major: 1, minor: 0, patch: 0, releaseCandidate: 4,
    });

    expect(versionString).toEqual('1.0.0-rc4');
  });

  it('returns an error on invalid syntax', () => {
    expect(() => stringify({})).toThrow();
  });
});
