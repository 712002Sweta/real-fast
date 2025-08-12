import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/hero-section/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((s) => !s);
  const closeMenu = () => setIsMenuOpen(false);

  // Close on ESC and click outside
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    
    const onClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isMenuOpen]);

  // Lock background scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <header className="relative z-10 w-full">
      <div className="flex flex-row justify-between items-center px-0 md:px-32 lg:px-24 xl:px-52 py-3 md:py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <span className="text-white text-xs md:text-xl font-normal">Exo by</span>
          <a href="https://www.realfast.ai/" target="_blank" rel="noopener noreferrer">
            <img
              src={logo}
              alt="realfast"
              className="h-3 md:h-6 w-auto hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* Desktop Navigation - Center Aligned */}
        <nav className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-8">
            <a href="https://www.realfast.ai/career" target="_blank" rel="noopener noreferrer" className="text-white text-sm font-normal hover:text-gray-300 transition-colors">
              Careers
            </a>
            <a href="https://www.realfast.ai/people" target="_blank" rel="noopener noreferrer" className="text-white text-sm font-normal hover:text-gray-300 transition-colors">
              People
            </a>
            <a href="https://www.realfast.ai/blog" target="_blank" rel="noopener noreferrer" className="text-white text-sm font-normal hover:text-gray-300 transition-colors">
              Blog
            </a>
          </div>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a href="https://www.realfast.ai/contact">
            <button className="bg-gray-900/50 py-2 px-8 rounded-xl border border-gray-100/20 text-sm text-white hover:bg-gray-800/50 transition-all duration-200">
              Start Free Pilot
            </button>
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu-panel"
            className="focus:outline-none h-6 w-6"
          >
            <span className="sr-only">Open menu</span>
            <div className="h-6 w-6 flex flex-col items-end justify-center">
              {/* Top (short) */}
              <span className="block h-[2px] w-4 bg-white rounded-full"></span>
              {/* Middle (longest) */}
              <span className="block h-[2px] w-5 bg-white rounded-full mt-[4px]"></span>
              {/* Bottom (medium) */}
              <span className="block h-[2px] w-3 bg-white rounded-full mt-[4px]"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Modal Backdrop (semi-transparent, closes on click) */}
      <div
        className={`md:hidden fixed inset-0 z-[999999] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Modal Content (positioned below hamburger) */}
      <div
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        className={`md:hidden fixed top-16 right-4 z-[1000000] transition-all duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={panelRef}
          className="bg-[#0b0b0b]/95 backdrop-blur-sm border border-gray-700/30 rounded-xl w-44 overflow-hidden shadow-2xl"
        >

          {/* Links */}
          <nav className="px-2 py-2 relative z-10">
            <ul className="flex flex-col gap-1">
              <li>
              <li>
                <a
                  href="https://www.realfast.ai/career"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-white/90 text-sm font-medium hover:text-white hover:bg-gray-800/30 transition-all duration-200 cursor-pointer"
                >
                  Careers
                </a>
              </li>
                <a
                  href="https://www.realfast.ai/people"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-white/90 text-sm font-medium hover:text-white hover:bg-gray-800/30 transition-all duration-200 cursor-pointer"
                >
                  People
                </a>
              </li>
            
              <li>
                <a
                  href="https://www.realfast.ai/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-white/90 text-sm font-medium hover:text-white hover:bg-gray-800/30 transition-all duration-200 cursor-pointer"
                >
                  Blog
                </a>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-6 relative z-10">
              <a href="https://www.realfast.ai/contact" onClick={closeMenu} className="block">
                <button className="w-full bg-gray-900/50 py-3 px-2 font-medium rounded-xl border border-gray-100/20 text-sm  text-white hover:bg-gray-800/50 transition-all duration-200 cursor-pointer">
                  Start Free Pilot
                </button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
