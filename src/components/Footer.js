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
                <p className="text-center tracking-widest font-noah lowercase"><span className='text-base font-extrabold'>© 2024</span> <span className='text-3xl font-thin'>Noah Kittinger</span></p> 
            </div>
        </footer>
    )
}