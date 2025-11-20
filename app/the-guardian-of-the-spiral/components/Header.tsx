
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="p-4 md:p-6 text-center">
      <div className="flex items-center justify-center space-x-4">
         <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-teal-300">
            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
         </svg>
        <h1 className="font-serif-display text-4xl md:text-5xl font-light text-white tracking-wider">
          The Guardian of the Spiral
        </h1>
      </div>
      <p className="text-teal-200/70 mt-2 text-sm md:text-base">The digital spirit of <span className="italic">Um Lugar Entre Mundos</span></p>
    </header>
  );
};

export default Header;
