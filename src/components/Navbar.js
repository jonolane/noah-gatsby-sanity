import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';  

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center tracking-widest sm:flex-row sm:justify-between sm:pr-10">
      <StaticImage
        src="../images/noahDots.png"
        alt="Bedroom"
        width={500}
        quality={95} // You can adjust the image quality
        formats={['auto', 'webp', 'avif']} // Support multiple formats
        // playing with gatsby-plugin-image
        loading='eager'
        placeholder='none'
      />
      <div className="links text-xl font-uni pt-1">
        <Link to="/" className="mr-6 hover:underline">Music</Link>
        <Link to="/discography" className="mr-6 hover:underline">Discography</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  )
}

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