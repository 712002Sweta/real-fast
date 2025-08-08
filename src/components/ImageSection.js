import React from 'react';

const ImageSection = () => {
  return (
    <section className="relative h-96 overflow-hidden">
     
     
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center text-white mt-10 max-w-4xl">
          {/* Main Headline */}
          <h2 className="text-3xl md:text-3xl lg:text-3xl font-normal mb-6 leading-tight">
            Transform never-ending<br />
            roadmaps into week-long wins
          </h2>
          
          {/* Underline with arrow */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-1 bg-blue-400 rounded-full relative">
              <div className="absolute right-0 top-0 w-0 h-0 border-l-8 border-l-blue-400 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </div>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-xl text-gray-300  font-normal leading-relaxed">
            EXO bridges the gap between AI-speed demands and legacy delivery processes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
