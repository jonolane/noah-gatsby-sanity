// handle modal click solution
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isIcon, setIcon] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScrollDisabled, setScrollDisabled] = useState(false);

  const handleClick = () => {
    setModalOpen(!isModalOpen);
    setScrollDisabled(!isModalOpen);
    console.log('isModalOpen: ', isModalOpen);
  };

  // useEffect logic to reset state when user resizes window
  useEffect(() => {
    const handleResize = () => {
      setIcon(window.innerWidth <= 640);
      if (window.innerWidth > 640) {
        setModalOpen(false);
      }
    };

    handleResize();

    // async listener to remove modal when user resizes window
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // tie modal window to icon behavior 
  const isBarsVisible = !isModalOpen;

  // decouple modal window from navbar
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  // disable scrolling when modal window is open
  useEffect(() => {
    if (isScrollDisabled) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling
      document.body.style.overflow = 'auto';
    }
  
    return () => {
      // Clean up the effect
      document.body.style.overflow = 'auto';
    };
  }, [isScrollDisabled]);

  return (
    <nav className="flex flex-col items-center tracking-widest sm:flex-row sm:justify-between sm:pr-10 z-50">
      <StaticImage
        src="../images/noahDots.png"
        alt="Bedroom"
        width={500}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        loading='eager'
        placeholder='none'
        className={isModalOpen ? 'z-modal-open' : ''}
      />
      {isIcon ? (
        <div className={isModalOpen ? 'z-modal-open' : ''}>
          <FontAwesomeIcon
            icon={isBarsVisible ? faBars : faXmark}
            className="text-black transition-opacity duration-500"
            size="2x"
            onClick={handleClick}
          />
        </div>
      ) : (
        <div className="links text-xl font-uni pt-1">
          <Link to="/" className="mr-6 hover:underline">Music</Link>
          <Link to="/discography" className="mr-6 hover:underline">Discography</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 font-uni tracking-widest text-3xl z-10" onClick={handleClick}>
          <div className="bg-white p-4 w-screen h-screen flex flex-col items-center justify-center" onClick={handleModalClick}>
            <Link to="/" className="block my-2 hover:underline">
              Music
            </Link>
            <Link to="/discography" className="block my-2 hover:underline">
              Discography
            </Link>
            <Link to="/contact" className="block my-2 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// modal window won't close
/*
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isIcon, setIcon] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(!isModalOpen);
    console.log('isModalOpen: ', isModalOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIcon(window.innerWidth <= 640);
      if (window.innerWidth > 640) {
        setModalOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isBarsVisible = !isModalOpen;

const handleModalClick = (event) => {
  event.stopPropagation();
}

  return (
    <nav className="flex flex-col items-center tracking-widest sm:flex-row sm:justify-between sm:pr-10">
      <StaticImage
        src="../images/noahDots.png"
        alt="Bedroom"
        width={500}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        loading='eager'
        placeholder='none'
      />
      {isIcon ? (
        <div>
          <FontAwesomeIcon
            icon={isBarsVisible ? faBars : faXmark}
            className="text-black transition-opacity duration-500"
            size="2x"
            onClick={handleClick}
          />
        </div>
      ) : (
        <div className="links text-xl font-uni pt-1">
          <Link to="/" className="mr-6 hover:underline">Music</Link>
          <Link to="/discography" className="mr-6 hover:underline">Discography</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50"
             onClick={handleModalClick}>
          <div className="bg-white p-4 w-4/6 h-4/"
               onClick={handleModalClick}>
            <Link to="/" className="block my-2 hover:underline">
              Music
            </Link>
            <Link to="/discography" className="block my-2 hover:underline">
              Discography
            </Link>
            <Link to="/contact" className="block my-2 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
*/

// previous solution, no stacking on smaller screens
/*
import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';

export default function Navbar() {
  return (
    <nav className="pr-10 flex justify-between items-center tracking-widest">
      <StaticImage
        src="../images/noahDots.png"
        alt="Bedroom"
        width={500}
        quality={95} // You can adjust the image quality
        formats={['auto', 'webp', 'avif']} // Support multiple formats
      />
      <div className="links text-lg font-uni pt-1">
        <Link to="/" className="mr-6 hover:underline">Music</Link>
        <Link to="/discography" className="mr-6 hover:underline">Discography</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  )
}
*/

// name instead of logo route
/* 
import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav className="p-10 flex justify-between items-center tracking-wider">
      <h1 className="text-4xl font-semibold font-uni">Noah Kittinger</h1>
      <div className="links text-lg font-kalam">
        <Link to="/" className="mr-6 hover:underline">Music</Link>
        <Link to="/discography" className="mr-6 hover:underline">Discography</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  )
}
*/