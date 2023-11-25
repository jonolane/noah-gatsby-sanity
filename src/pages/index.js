import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { useAlbums } from '../utils/displayController';

export default function Home() {
  const albums = useAlbums();
  const [isLoaded, setIsLoaded] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const hasInitialLoadOccurred = sessionStorage.getItem('hasInitialLoadOccurred');

    if (!hasInitialLoadOccurred) {
      const timer = setTimeout(() => {
        setIsLoaded(false);
        sessionStorage.setItem('hasInitialLoadOccurred', 'true');
        setAnimationComplete(true);
      }, 2500); // Replace this with your actual loading logic.

      return () => clearTimeout(timer);
    } else {
      setIsLoaded(false);
      setAnimationComplete(true);
    }
  }, []);

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  useEffect(() => {
    console.log('isLoaded: ', isLoaded);
    console.log('animationComplete: ', animationComplete);
  }, []);

  return (
    <>
      <div className={`bg-white pointer-events-none flex fixed h-screen w-screen items-center justify-center z-50 ${isLoaded ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}
           >
        <StaticImage
          src="../images/noahDots.png"
          alt="Dots = )"
          width={500}
          quality={95}
          formats={['auto', 'webp', 'avif']}
          loading='eager'
          placeholder='none'
          className="animate-pulse"
        />
      </div>

      {/* removing these comments gets rid of fade in animation for container */}
      {/*}
      {animationComplete && (
      */}

      <div className={`${animationComplete ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>

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

      </div>

      {/*}
      )}
      */}

    </>
  );
}

// working index page version without loading page
/*
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
*/