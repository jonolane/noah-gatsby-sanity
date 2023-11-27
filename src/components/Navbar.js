// pausing on the fade-down animation until the gatsby build bug is fixed
/*
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

// import global context for initial load
import { AppContext } from '../utils/AppContext';

export default function Navbar() {
  const [isIcon, setIcon] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScrollDisabled, setScrollDisabled] = useState(false);

  // get and set global context variable for initial load
  const appContext = useContext(AppContext);
  const { isInitialLoad, setInitialLoad } = appContext;

  const handleClick = () => {
    const currentPage = window.location.pathname;

    if ((currentPage === '/' || currentPage === '/discography' || currentPage === '/contact') && isModalOpen) {
      // Close the modal if page Link is clicked and already on the same page
      setModalOpen(false);
      setScrollDisabled(false);
    } else {
      // Toggle the modal
      setModalOpen(!isModalOpen);
      setScrollDisabled(!isModalOpen);
    }
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

  // handle social media icon clicks
  const handleSocialClick = (url) => {
    window.open(url, '_blank');
    console.log(url);
  };

  // open modal window ONLY if it's the inital load use React context
  // could switch to gatsby browswer api functions if manual "inital load" function starts to bug
  // gatsby browser api docs: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
  // "onClienEntry" or "onInitialRender" for example ^^^^
  // could also go the route of making an entire context theme for inital load mobile view
  useEffect(() => { 
    const handleInitialLoad = () => {
      if (window.innerWidth <= 640 && isInitialLoad) {
        setModalOpen(true);
        setScrollDisabled(true);
      }
    }

    handleInitialLoad();
    setInitialLoad(false); // reset global context
}, [isInitialLoad, setInitialLoad]);

useEffect(() => {
  console.log('isModalOpen: ', isModalOpen);
  console.log('isInitialLoad: ', isInitialLoad);  
}, [isModalOpen]);

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
        className="z-30"
      />
      {isIcon ? (
        <div className="z-30">
          <FontAwesomeIcon
            icon={isBarsVisible ? faBars : faXmark}
            className="text-black"
            size="2x"
            onClick={handleClick}
          />
        </div>
      ) : (
        <div className="text-xl font-uni pt-1">
          <Link to="/" className="mr-6 hover:underline">Music</Link>
          <Link to="/discography" className="mr-6 hover:underline">Discography</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      )}

      // modal view 
      <div className={`fixed inset-0 flex items-center justify-center font-uni tracking-widest text-5xl z-10 ${isModalOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}>
        <div className={`bg-white p-4 w-screen h-screen flex flex-col items-center justify-center transition-opacity ${isModalOpen ? 'animate-duration-500 animate-fade-up' : 'duration-500 opacity-0'}`} onClick={handleModalClick}>

          // if modal starts bugging, try removing these two child divs and let the footer icons rest right below 

          <div className="flex flex-col justify-center items-center h-full">
            <Link to="/" className="block my-3 hover:underline" onClick={handleClick}>
              Music
            </Link>
            <Link to="/discography" className="block my-3 hover:underline" onClick={handleClick}>
              Discography
            </Link>
            <Link to="/contact" className="block my-3 hover:underline" onClick={handleClick}>
              Contact
            </Link>
          </div>
          <div className="mt-auto">
            <div className=" space-x-6">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-2xl text-black cursor-pointer"
                onClick={() => handleSocialClick("https://www.instagram.com/kittinger.noah/")}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-2xl text-black cursor-pointer"
                onClick={() => handleSocialClick("https://twitter.com/noah_kittinger")}
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-2xl text-black cursor-pointer"
                onClick={() => handleSocialClick("https://www.youtube.com/@bedroomofficial/about")}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
*/

// working well but doesn't have the fade up animation
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

// import global context for initial load
import { AppContext } from '../utils/AppContext';

export default function Navbar() {
  const [isIcon, setIcon] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScrollDisabled, setScrollDisabled] = useState(false);

  // get and set global context variable for initial load
  const appContext = useContext(AppContext);
  const { isInitialLoad, setInitialLoad } = appContext;

  const handleClick = () => {
    const currentPage = window.location.pathname;

    if ((currentPage === '/' || currentPage === '/discography' || currentPage === '/contact') && isModalOpen) {
      // Close the modal if page Link is clicked and already on the same page
      setModalOpen(false);
      setScrollDisabled(false);
    } else {
      // Toggle the modal
      setModalOpen(!isModalOpen);
      setScrollDisabled(!isModalOpen);
    }
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

  // handle social media icon clicks
  const handleSocialClick = (url) => {
    window.open(url, '_blank');
    console.log(url);
  };

  // open modal window ONLY if it's the inital load use React context
  // could switch to gatsby browswer api functions if manual "inital load" function starts to bug
  // gatsby browser api docs: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
  // "onClienEntry" or "onInitialRender" for example ^^^^
  // could also go the route of making an entire context theme for inital load mobile view
  useEffect(() => {
    const handleInitialLoad = () => {
      if (window.innerWidth <= 640 && isInitialLoad) {
        setModalOpen(true);
        setScrollDisabled(true);
      }
    }

    handleInitialLoad();
    setInitialLoad(false); // reset global context
  }, [isInitialLoad, setInitialLoad]);

  useEffect(() => {
    console.log('isInitialLoad: ', isInitialLoad);
  }, [isInitialLoad]);

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
        className="z-30"
      />
      {isIcon ? (
        <div className="z-30">
          <FontAwesomeIcon
            icon={isBarsVisible ? faBars : faXmark}
            className="text-black transition-opacity duration-500"
            size="2x"
            onClick={handleClick}
          />
        </div>
      ) : (
        <div className="text-xl font-uni pt-1">
          <Link to="/" className="mr-6 hover:underline">Music</Link>
          <Link to="/discography" className="mr-6 hover:underline">Discography</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      )}

      {/*} modal view */}
      <div className={`fixed inset-0 flex items-center justify-center bg-opacity-50 font-uni tracking-widest text-5xl z-10 ${isModalOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}>
        <div className={`bg-white p-4 w-screen h-screen flex flex-col items-center justify-center transition-opacity duration-500 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`} onClick={handleModalClick}>

          {/*} if modal starts bugging, try removing these two child divs and let the footer icons rest right below */}

          <div className="flex flex-col justify-center items-center h-full">
            <Link to="/" className="block my-3 hover:underline" onClick={handleClick}>
              Music
            </Link>
            <Link to="/discography" className="block my-3 hover:underline" onClick={handleClick}>
              Discography
            </Link>
            <Link to="/contact" className="block my-3 hover:underline" onClick={handleClick}>
              Contact
            </Link>
          </div>
          <div className='mt-auto'>
            <div className=" space-x-6">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-2xl text-black cursor-pointer"
                onClick={() => handleSocialClick("https://www.instagram.com/kittinger.noah/")}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-2xl text-black cursor-pointer"
                onClick={() => handleSocialClick("https://twitter.com/noah_kittinger")}
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-2xl text-black cursor-pointer"
                onClick={() => handleSocialClick("https://www.youtube.com/@bedroomofficial/about")}
              />
            </div>
          </div>
        </div>
      </div>
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