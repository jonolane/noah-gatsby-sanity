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
import LoadingPlaceholder from './LoadingPlaceholder';

export default function Layout({ children }) {
  const [isContentLoaded, setContentLoaded] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const handleContentRender = async () => {
      // Simulate an asynchronous operation to fetch data or perform any other tasks
      await new Promise((resolve) => setTimeout(resolve, isInitialLoad ? 2000 : 200));

      if (isMounted) {
        setContentLoaded(true);
      }
    };

    handleContentRender();

    return () => {
      isMounted = false;
    };
  }, [isInitialLoad]);

  useEffect(() => {
    setIsInitialLoad(false);
  }, []);

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