const fs = require('fs');
const { parse } = require('./index');

jest.mock('fs');

describe('fileParser', () => {
  it('parses the version from a versionfile', async () => {
    fs.readFileSync.mockReturnValue('1.0.0');

    const { error, version } = await parse('./someFile', { ext: '' });

    expect(error).toBeUndefined();
    expect(version).toEqual('1.0.0');
  });

  it('parses the version from a package.json', async () => {
    fs.readFileSync.mockReturnValue(JSON.stringify({
      version: '1.0.0',
    }));

    const { error, version } = await parse('./someFile', { ext: '.json' });

    expect(error).toBeUndefined();
    expect(version).toEqual('1.0.0');
  });

  it('returns an error if json is invalid', async () => {
    fs.readFileSync.mockReturnValue('');

    const { error, version } = await parse('./someFile', { ext: '.json' });

    expect(error).toBe('Not a valid json');
    expect(version).toBeUndefined();
  });

  it('returns an error if no version is found', async () => {
    fs.readFileSync.mockReturnValue('{}');

    const { error, version } = await parse('./someFile', { ext: '.json' });

    expect(error).toBe('No version found');
    expect(version).toBeUndefined();
  });
});
