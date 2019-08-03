const { parse } = require('./index');

describe('versionParser', () => {
  it('parses the version', () => {
    const { error, version } = parse('1.2.3');

    expect(error).toBeUndefined();
    expect(version).toEqual({
      major: 1,
      minor: 2,
      patch: 3,
      releaseCandidate: undefined,
    });
  });

  it('parses the version with rc', () => {
    const { error, version } = parse('1.2.3-rc4');

    expect(error).toBeUndefined();
    expect(version).toEqual({
      major: 1,
      minor: 2,
      patch: 3,
      releaseCandidate: 4,
    });
  });

  it('returns an error on invalid syntax', () => {
    const { error, version } = parse('abc');

    expect(error).toBe('not a valid versioning syntax');
    expect(version).toEqual({});
  });
});
