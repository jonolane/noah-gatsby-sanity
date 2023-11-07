import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { authenticate } from '../utils/spotifyAuth';

export default function Home() {
  const [albumCover, setAlbumCover] = useState(null);

  // authenticate 
  useEffect(() => {
    authenticate().then((api) => {
      getAlbumCover(api);
    }).catch((error) => console.error(error));
  }, []);

  // get album cover
  function getAlbumCover(api) {
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
  }

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
  );
}