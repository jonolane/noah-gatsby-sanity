// current best working solution for phantom footer
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="layout bg-white text-black">
      <Navbar />
      <div className="content">
        {children}
      </div>
      {showFooter && <Footer />}
      <Head />
    </div>
  );
}

export const Head = () => (
  <>
    {/* open graph tags for SEO */}
    <meta name="image" property="og:image" content="https://noahkittinger.co/preview.jpg" />
    <meta name="title" property="og:title" content="Noah Kittinger" />
    <meta name="description" property="og:description" content="Producer / Musician / Audio Engineer" />

    {/* twitter card */}
    <meta name="twitter:card" property="twitter:card" content="https://noahkittinger.co/preview.jpg" />
    <meta name="twitter:title" property="twitter:title" content="Noah Kittinger" />
    <meta name="twitter:description" property="twitter:description" content="Producer / Musician / Audio Engineer" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Kalam&family=UnifrakturMaguntia&display=swap" rel="stylesheet" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
  </>
)