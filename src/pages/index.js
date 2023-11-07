import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { authenticate } from '../utils/spotifyAuth';

export default function Home() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    authenticate().then((api) => {
      const albumLinks = [
        'https://open.spotify.com/album/42wtQWKJgputaha9JSKWGJ?si=AyjFXxR-SZiYPriSP34sUg',
        'https://open.spotify.com/album/0blfd2gTNu3Yr3k7ehOe1Y?si=QlOxcJ0_Raa5SQG3hEjZtw',
        'https://open.spotify.com/album/4ngbnWenF6xcw6gtZzGOFH?si=j2lCDio9STqbs_mirk92zw',
        'https://open.spotify.com/album/2cB3JYraRPrxqIODugyL6M?si=Dn8GgarCSvGf4ZJi26XjJQ',
        'https://open.spotify.com/album/1r84Srqz3Ph0EPucaQQLLm?si=QaGcQbHISLKA5wi10j2uVQ',
      ];

      Promise.all(
        albumLinks.map((link) => {
          const id = link.match(/album\/(\w+)/)[1];
          return api.getAlbum(id);
        })
      ).then((albums) => {
        setAlbums(albums);
      });
    }).catch((error) => console.error(error));
  }, []);

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center font-poppins tracking-wider">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
          {albums.map((album) => (
            <Card
              key={album.id}
              imageSrc={album.images[0].url}
              title={album.name}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}