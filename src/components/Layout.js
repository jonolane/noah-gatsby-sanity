import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="layout bg-gray-800 text-white">
      <Navbar />
      <div className="content">
        { children }
      </div>
      <Footer />
    </div>
  )
}