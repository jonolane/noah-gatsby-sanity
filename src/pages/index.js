import React, { useState, useEffect, useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { useAlbums } from '../utils/displayController';

// import global context for inital load
import { AppContext } from '../utils/AppContext';

export default function Home() {
  const albums = useAlbums();
  // setting isLoaded to true within hasInitialLoadOccurred instead of here to avoid dot flicker on navigation
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // get and set global context variable for initial load
  const appContext = useContext(AppContext);
  const { setInitialLoad, isStopHomeAnimation, setStopHomeAnimation } = appContext;

  console.log('Initial isLoaded:', isLoaded);
  console.log('Initial animationComplete:', animationComplete);
  console.log('Initial isStopHomeAnimation:', isStopHomeAnimation);

  useEffect(() => {
    const hasInitialLoadOccurred = sessionStorage.getItem('hasInitialLoadOccurred');

    if (!hasInitialLoadOccurred) {
      // setting before the timer for one time dot render
      setIsLoaded(true);

      const timer = setTimeout(() => {
        setIsLoaded(false);
        sessionStorage.setItem('hasInitialLoadOccurred', 'true');
        setAnimationComplete(true);

        // here's where I want to try to set a global variable to true 
        setInitialLoad(true);

      }, 2500); // Replace this with your actual loading logic.

      return () => clearTimeout(timer);
    } else {
      setIsLoaded(false);
      setAnimationComplete(true);
      setStopHomeAnimation(true);
    }
  }, []);

  // spotify link in new tab
  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

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
          // loading='eager'
          loading='lazy'
          placeholder='none'
          className="animate-pulse"
        />
      </div>

      {/* removing these comments gets rid of fade in animation for container */}
      {/*
      {animationComplete && (
      */}

<div className={`${animationComplete && !isStopHomeAnimation ? 'opacity-100 transition-opacity duration-1000' : (animationComplete || isStopHomeAnimation ? 'opacity-100' : 'opacity-0')}`}>

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

      {/*
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