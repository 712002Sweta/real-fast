import React from 'react';
import logo from '../assets/hero-section/logo.png';

const Header = () => {
  return (
    <span className="relative z-10 flex flex-row justify-between items-center px-52 py-4 w-full">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <span className="text-white text-xl font-normal">Exo by</span>
        <img src={logo} alt="realfast" className="h-6 w-auto" />
      </div>

      {/* Start Free Pilot Button */}
      <a href="https://www.realfast.ai/contact" className="">
        <button className="w-full sm:w-auto border border-gray-700 bg-gray-900/60 text-white px-8 py-2 rounded-lg font-medium text-sm hover:bg-gray-800/20">
          Start Free Pilot
        </button>
      </a>
    </span>
  );
};

export default Header;
