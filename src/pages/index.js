import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SpotifyWebApi from 'spotify-web-api-js';

const CLIENT_ID = 'd4d80ce37254416a8a1bd23ffb4681ea';
const CLIENT_SECRET = '395ec27481fe4de0ad5d8939d7aba84e';

export default function Home() {
  const [spotifyApi, setSpotifyApi] = useState(null);
  const [albumCover, setAlbumCover] = useState(null);

  useEffect(() => {
    const api = new SpotifyWebApi();
    setSpotifyApi(api);

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

    fetch('https://accounts.spotify.com/api/token', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const access_token = data.access_token;
        api.setAccessToken(access_token);

        const spotifyUrl = 'https://open.spotify.com/album/42wtQWKJgputaha9JSKWGJ?si=AyjFXxR-SZiYPriSP34sUg';
        const albumIdMatch = spotifyUrl.match(/album\/(\w+)/);
        const albumId = albumIdMatch ? albumIdMatch[1] : null;

        if (albumId) {
          api.getAlbum(albumId).then(
            function(data) {
              setAlbumCover(data.images[0].url);
            },
            function(err) {
              console.error(err);
            }
          );
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center h-screen font-poppins">
        {albumCover ? (
          <img
            src={albumCover}
            alt="Album Cover"
            className="w-96 h-96 object-cover"
          />
        ) : (
          <p>Loading album cover...</p>
        )}
      </section>
    </Layout>
  )
}