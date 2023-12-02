import React from 'react'

const NotFound = () => {
  return (
      <div className='bg-white min-h-screen flex items-center justify-center'>
      {Array.from({ length: 50 }, (_, index) => (
        <h1
          key={index}
          className="text-black text-9xl absolute animate-pulse"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${index * 0.1}s`,
            animationDuration: '0.8s',
          }}
        >
          404
        </h1>
      ))}
      </div>
  );
}
 
export default NotFound

