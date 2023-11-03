import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="p-10">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <div className="flex items-center space-x-4 py-4">
                    <a href="https://www.instagram.com/kittinger.noah/" className="text-xl">
                        <FontAwesomeIcon icon={faInstagram} style={{ color: '#000000' }} />
                    </a>
                    <a href="https://twitter.com/noah_kittinger" className="text-xl">
                        <FontAwesomeIcon icon={faTwitter} style={{ color: "#000000", }} />
                    </a>
                    <a href="https://www.youtube.com/@bedroomofficial/about" className="text-xl">
                        <FontAwesomeIcon icon={faYoutube} style={{ color: "#000000", }} />
                    </a>
                    {/* Add more social media icons as needed */}
                </div>
                <p className="font-semibold text-center mb-2 font-uni">Created with love by Jono Lane</p>
            </div>
        </footer>
    )
}
