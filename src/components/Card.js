import React from 'react';

export default function Card({ imageSrc, title }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-96 aspect-w-1 aspect-h-1 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
      </div>
    </div>
  );
}