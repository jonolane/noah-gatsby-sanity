import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    const handleCardClick = (url) => {
        window.open(url, '_blank');
        console.log(url);
    };

    return (
        <footer className="py-10 pb-10 pt-5">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <div className="flex items-center space-x-6 pb-6 pt-4">
                    <FontAwesomeIcon icon={faInstagram} className='text-2xl text-black cursor-pointer' onClick={() => handleCardClick("https://www.instagram.com/kittinger.noah/")} />
                    <FontAwesomeIcon icon={faTwitter} className='text-2xl text-black cursor-pointer' onClick={() => handleCardClick("https://twitter.com/noah_kittinger")} />
                    <FontAwesomeIcon icon={faYoutube} className='text-2xl text-black cursor-pointer' onClick={() => handleCardClick("https://www.youtube.com/@bedroomofficial/about")} />
                </div>
                {/*<p className="font-semibold text-center font-uni text-lg">✨ Created with 💗 by Jono Lane ✨</p> */}
                <p className="font-semibold text-center tracking-widest font-uni text-lg">© 2023 Noah Kittinger</p>
            </div>
        </footer>
    )
}

/*
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const handleCardClick = (url) => {
    window.open(url, '_blank');
    console.log(url);
  };

  const [isContentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const handleContentRender = () => {
      console.log('Content rendered');
      setContentLoaded(true);
    };

    if (document.readyState === 'complete') {
      handleContentRender();
    } else {
      window.addEventListener('DOMContentLoaded', handleContentRender);
    }

    return () => {
      window.removeEventListener('DOMContentLoaded', handleContentRender);
    };
  }, []);

  useEffect(() => {
    console.log('isContentLoaded:', isContentLoaded);
  }, [isContentLoaded]);

  return (
    <>
      {!isContentLoaded && (
        <div className="min-h-screen bg-white"></div>
      )}

      {isContentLoaded && (
        <footer className="py-10 pb-10 pt-5">
          <div className="container mx-auto flex flex-col items-center justify-center">
            <div className="flex items-center space-x-6 pb-6 pt-4">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: '#000000' }}
                className="text-2xl"
                onClick={() => handleCardClick('https://www.instagram.com/kittinger.noah/')}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: '#000000' }}
                className="text-2xl"
                onClick={() => handleCardClick('https://twitter.com/noah_kittinger')}
              />
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ color: '#000000' }}
                className="text-2xl"
                onClick={() => handleCardClick('https://www.youtube.com/@bedroomofficial/about')}
              />
            </div>
            <p className="font-semibold text-center font-uni text-lg">✨ Created with 💗 by Jono Lane ✨</p>
          </div>
        </footer>
      )}
    </>
  );
}
*/