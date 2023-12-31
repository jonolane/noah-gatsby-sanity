/* require('./setupTests');
const { authenticate } = require('./spotifyAuth');

// would need to install fetch-mock again if I tried this
const fetchMock = require('fetch-mock');

describe('authenticate', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it('connects to the Spotify API', async () => {
    fetchMock.post('https://accounts.spotify.com/api/token', {
      access_token: 'test_access_token',
      token_type: 'Bearer',
      expires_in: 3600,
    });

    debugger;

    const api = await authenticate();

    expect(fetchMock.lastUrl()).toBe('https://accounts.spotify.com/api/token');
    expect(fetchMock.lastOptions()).toEqual({
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: expect.any(String),
      },
      body: expect.any(URLSearchParams),
    });
    expect(api.getAccessToken()).toEqual('test_access_token');
  });
});
*/

test('simple test', () => {
  expect(1 + 1).toBe(2);
});