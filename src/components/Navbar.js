import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Noah Kittinger</h1>
      <div className="links">
        <Link to="/" className="mr-4 hover:underline">Music</Link>
        <Link to="/about" className="mr-4 hover:underline">About</Link>
        <Link to="/projects" className="hover:underline">Contact</Link>
      </div>
    </nav>
  )
}