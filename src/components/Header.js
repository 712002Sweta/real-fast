import React from 'react';
import logo from '../assets/hero-section/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 sm:px-8 md:px-20 py-4 w-full bg-black border-b border-gray-800">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="realfast" className="h-6 w-auto" />
      </div>

      {/* Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <nav className="flex space-x-6 lg:space-x-10">
          <a href="#benefits" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
            Benefits
          </a>
          <a href="#results" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
            Results
          </a>
          <a href="#get-started" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
            Get Started
          </a>
        </nav>
        
        {/* Start Free Pilot Button */}
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 lg:px-6 py-2 rounded-lg font-medium text-sm transition-colors">
          Start Free Pilot
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
