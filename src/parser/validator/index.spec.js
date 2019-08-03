const fs = require('fs');
const { validatePath } = require('./index');

jest.mock('fs');

describe('validatePath', () => {
  it('parses a path', async () => {
    fs.access.mockImplementation((_, __, cb) => cb());

    const { error, parsedPath } = await validatePath('./someFile');

    expect(error).toBeUndefined();
    expect(parsedPath).toBeDefined();
  });

  it('returns an error on no path', async () => {
    const { error, parsedPath } = await validatePath();

    expect(error).toEqual('no path passed');
    expect(parsedPath).toBeUndefined();
  });

  it('returns an error on invalid path', async () => {
    const { error, parsedPath } = await validatePath(123);

    expect(error).toEqual('path is not valid');
    expect(parsedPath).toBeUndefined();
  });

  it('returns an error on unspported extension', async () => {
    const { error, parsedPath } = await validatePath('./abc.def');

    expect(error).toEqual('file type is not supported');
    expect(parsedPath).toBeUndefined();
  });

  it('returns an error on unspported extension', async () => {
    fs.access.mockImplementation((_, __, cb) => cb('notFound'));

    const { error, parsedPath } = await validatePath('./abc');

    expect(error).toEqual('path is not reachable');
    expect(parsedPath).toBeUndefined();
  });
});
