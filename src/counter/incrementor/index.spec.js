const { increment } = require('./index');

describe('incrementor', () => {
  it('counts up the major version', () => {
    const { error, version } = increment({
      major: 1,
      minor: 2,
      patch: 3,
      releaseCandidate: undefined,
    }, 'major');

    expect(error).toBeUndefined();
    expect(version).toEqual({
      major: 2,
      minor: 0,
      patch: 0,
      releaseCandidate: undefined,
    });
  });

  it('counts up the minor version', () => {
    const { error, version } = increment({
      major: 1,
      minor: 2,
      patch: 3,
      releaseCandidate: undefined,
    }, 'minor');

    expect(error).toBeUndefined();
    expect(version).toEqual({
      major: 1,
      minor: 3,
      patch: 0,
      releaseCandidate: undefined,
    });
  });

  it('counts up the patch version', () => {
    const { error, version } = increment({
      major: 1,
      minor: 2,
      patch: 3,
      releaseCandidate: undefined,
    }, 'patch');

    expect(error).toBeUndefined();
    expect(version).toEqual({
      major: 1,
      minor: 2,
      patch: 4,
      releaseCandidate: undefined,
    });
  });

  it('counts up the rc version', () => {
    const { error, version } = increment({
      major: 1,
      minor: 2,
      patch: 3,
      releaseCandidate: 4,
    }, 'rc');

    expect(error).toBeUndefined();
    expect(version).toEqual({
      major: 1,
      minor: 2,
      patch: 3,
      releaseCandidate: 5,
    });
  });

  it('counts up the rc version', () => {
    const { error, version } = increment({
      major: 1,
      minor: 2,
      patch: 3,
      releaseCandidate: undefined,
    }, 'rc');

    expect(error).toBeUndefined();
    expect(version).toEqual({
      major: 1,
      minor: 2,
      patch: 3,
      releaseCandidate: 1,
    });
  });

  it('counts up the rc version', () => {
    const { error, version } = increment({
      major: 1,
      minor: 2,
      patch: 3,
      releaseCandidate: undefined,
    }, 'releaseCandidate');

    expect(error).toBeUndefined();
    expect(version).toEqual({
      major: 1,
      minor: 2,
      patch: 3,
      releaseCandidate: 1,
    });
  });

  it('returns an error on invalid syntax', () => {
    const { error, version } = increment({
      major: 1,
      minor: 2,
      patch: 3,
      releaseCandidate: undefined,
    });

    expect(error).toBe('Invalid version increment string');
    expect(version).toEqual({
      major: 1,
      minor: 2,
      patch: 3,
      releaseCandidate: undefined,
    });
  });
});
