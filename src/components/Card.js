import React from 'react';

export default function Card({ imageSrc, title }) {
  return (
    <div className="bg-white overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="w-full object-cover"
      />
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
      </div>
    </div>
  );
}

/* 
import React from 'react';

export default function Card({ imageSrc, title }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
      </div>
    </div>
  );
}

*/