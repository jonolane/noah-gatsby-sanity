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
                    {/* switched to opening in seperate tab instead of <a>. broswer still seems to not want a string for the onClick function */}
                    <FontAwesomeIcon icon={faInstagram} style={{ color: '#000000' }} className='text-2xl' onClick={() => handleCardClick("https://www.instagram.com/kittinger.noah/")} />
                    <FontAwesomeIcon icon={faTwitter} style={{ color: "#000000", }} className='text-2xl' onClick={() => handleCardClick("https://twitter.com/noah_kittinger")} />
                    <FontAwesomeIcon icon={faYoutube} style={{ color: "#000000", }} className='text-2xl' onClick={() => handleCardClick("https://www.youtube.com/@bedroomofficial/about")} />
                </div>
                <p className="font-semibold text-center font-uni text-lg">✨ Created with 💗 by Jono Lane ✨</p>
            </div>
        </footer>
    )
}
