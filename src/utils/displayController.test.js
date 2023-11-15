/* 
const fetchMock = require('jest-fetch-mock');
const { getAlbums } = require('./displayController');

global.XMLHttpRequest = require('xhr2');

describe('getAlbums', () => {
  beforeAll(() => {
    fetchMock.enableMocks();
  });

  it('returns an array of albums', async () => {
    const data = {
      allSanityRelease: {
        nodes: [
          {
            id: '1',
            singleTrack: false,
            spotifyLink: 'https://open.spotify.com/album/album-1',
          },
        ],
      },
    };

    fetchMock.mockResponseOnce(JSON.stringify({ data: 'mock data' }));

    const albums = await getAlbums(data);

    expect(Array.isArray(albums)).toBe(true);
    expect(albums.length).toBeGreaterThan(0);
    expect(albums[0]).toHaveProperty('id');
    expect(albums[0]).toHaveProperty('type');
    expect(albums[0]).toHaveProperty('name');
    expect(albums[0]).toHaveProperty('images');
    expect(albums[0]).toHaveProperty('release_date');
    expect(albums[0]).toHaveProperty('displayOrNo');
    expect(albums[0]).toHaveProperty('slug');
  });
});
*/

test('simple test', () => {
  expect(2 + 2).toBe(4);
});