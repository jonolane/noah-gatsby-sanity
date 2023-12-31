import React from 'react';

export default function Card({ imageSrc, title, onClick }) {
  return (
    <div className="bg-white overflow-hidden" onClick={onClick}>
      <img
        src={imageSrc}
        alt={title}
        className="w-full object-cover hover:opacity-90 transition-opacity ease-in-out"
      />
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
      </div>
    </div>
  );
}