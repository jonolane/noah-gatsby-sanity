// original implementation not trying to account for phantom footer

/*
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="layout bg-white text-black">
      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Kalam&family=UnifrakturMaguntia&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
      </head>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}
*/

/*
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingPlaceholder from './LoadingPlaceholder';

export default function Layout({ children }) {
  const [isContentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const handleContentRender = () => {
      console.log('Content rendered');
      setContentLoaded(true);
    };

    if (document.readyState === 'complete') {
      handleContentRender();
    } else {
      window.addEventListener('load', handleContentRender);
    }

    return () => {
      window.removeEventListener('load', handleContentRender);
    };
  }, []);

  useEffect(() => {
    console.log('isContentLoaded:', isContentLoaded);
  }, [isContentLoaded]);

  console.log('Rendering Layout');

  return (
    <div className="layout bg-white text-black">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Kalam&family=UnifrakturMaguntia&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
      </head>
      <Navbar />
      <div className="content">
        {!isContentLoaded ? <LoadingPlaceholder /> : children}
      </div>
      <Footer />
    </div>
  );
}
*/

/*
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingPlaceholder from './LoadingPlaceholder';

export default function Layout({ children }) {
  const [isContentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const handleContentRender = () => {
      console.log('Content rendered');
      setContentLoaded(true);
    };

    if (document.readyState === 'complete') {
      handleContentRender();
    } else {
      window.addEventListener('load', handleContentRender);
    }

    return () => {
      window.removeEventListener('load', handleContentRender);
    };
  }, [children]);

  console.log('Rendering Layout');

  return (
    <div className="layout bg-white text-black">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Kalam&family=UnifrakturMaguntia&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
      </head>
      <Navbar />
      <div className="content">
        {!isContentLoaded && <LoadingPlaceholder />}
        {isContentLoaded && children}
      </div>
      <Footer />
    </div>
  );
}
*/

// current hacky best working solution for phantom footer
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="layout bg-white text-black">
      <Navbar />
      <div className="content">
        {children}
      </div>
      {showFooter && <Footer />}
      <Head />
    </div>
  );
}

export const Head = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Kalam&family=UnifrakturMaguntia&display=swap" rel="stylesheet" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
  </>
)

// trying to get the page to render only after it's finished loading
/*
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleContentRender = async () => {
      // Simulate an asynchronous operation to fetch data or perform any other tasks
      await new Promise((resolve) => setTimeout(resolve, 150));

      setIsLoading(false);
    };

    handleContentRender();
  }, []);

  return (
    <div className={`layout bg-white text-black ${isLoading ? 'hidden' : ''}`}>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Kalam&family=UnifrakturMaguntia&display=swap" rel="stylesheet" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
      </head>
      <Navbar />
      <div className={`content ${isLoading ? 'hidden' : ''}`}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
*/

// useEffect with empty dependency array to "simulate" window.onload
/*
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import LoadingPlaceholder from './LoadingPlaceholder';

export default function Layout({ children }) {
  const [isContentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setContentLoaded(true);
  }, []);

  console.log('isContentLoaded: ', isContentLoaded);

  return (
    <div className={`layout bg-white text-black ${!isContentLoaded ? 'hidden' : ''}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Kalam&family=UnifrakturMaguntia&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
      </head>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
}
*/