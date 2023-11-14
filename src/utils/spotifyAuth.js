const SpotifyWebApi = require('spotify-web-api-js');

const CLIENT_ID = process.env.GATSBY_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.GATSBY_SPOTIFY_CLIENT_SECRET;

async function authenticate() {
  const api = new SpotifyWebApi();

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
    }),
  };

  const response = await fetch('https://accounts.spotify.com/api/token', requestOptions);
  const data = await response.json();
  const access_token = data.access_token;
  api.setAccessToken(access_token);

  return api;
}

module.exports = {
  authenticate,
};