const SpotifyWebApi = require('spotify-web-api-js');

const CLIENT_ID = 'd4d80ce37254416a8a1bd23ffb4681ea';
const CLIENT_SECRET = '395ec27481fe4de0ad5d8939d7aba84e';

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