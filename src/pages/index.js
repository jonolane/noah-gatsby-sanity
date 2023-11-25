import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { useAlbums } from '../utils/displayController';

export default function Home() {
  const albums = useAlbums();

  // console.log(albums);

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center font-poppins tracking-wider">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10 px-10">
          {albums.map((album) => (
            <Card
              key={album.id}
              imageSrc={album.type === 'album' ? album.images[0].url : album.album.images[0].url}
              title={album.name}
              onClick={() => handleCardClick(album.link)}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}