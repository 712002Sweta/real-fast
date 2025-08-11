import React from 'react';
import vector6Icon from '../assets/Vector 6.png';

const TransformSection = ({ transformVisible, transformRef }) => {
  return (
        <div ref={transformRef} className={`relative py-16 md:py-28 transform-container ${transformVisible ? 'animate' : ''}`}>
      <div className="relative z-10 h-60 md:h-80 flex items-center justify-center px-8 md:px-48">
                  <div className="text-center text-white mt-4 md:mt-10 max-w-4xl">
          {/* Introducing EXO */}
          <p className={`text-lg text-[#BFDBFE] font-normal mb-3 transform-intro ${transformVisible ? 'animate' : ''}`}>
            Introducing EXO
          </p>

          {/* Main Headline */}
          <div className="relative">
            <h2 className={`text-2xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight transform-headline ${transformVisible ? 'animate' : ''}`}>
              Transform never-ending<br />
              roadmaps into week-long wins
            </h2>
            {/* Vector 6 - positioned like in screenshot */}
            <img
              src={vector6Icon}
              alt="Vector 6"
              className="absolute -bottom-3 -right-8 w-24 h-10 z-10 hidden md:block"
            />
          </div>

          {/* Sub-headline */}
          <p className={`text-xl md:text-xl text-gray-400 font-normal leading-relaxed transform-sub ${transformVisible ? 'animate' : ''}`}>
            EXO bridges the gap between AI-speed demands<br />
            and legacy delivery processes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransformSection;
