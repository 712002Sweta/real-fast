import React from 'react';

const ProblemSection = () => {
  return (
    <section className=" py-40 px-16">
      <div className="max-w-6xl mx-auto text-white">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-lg font-normal text-[#BFDBFE] mb-4">The Problem</h2>
          <h1 className="text-3xl md:text-3xl font-normal leading-tight">
            Leadership Expects AI Results. Teams Deliver at Legacy Speed.
          </h1>
        </div>
        
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-items-start">
          {/* Section 1 */}
          <div className=" ml-28 text-left max-w-[240px]">
            <div className="flex justify-start mb-6">
              <div className="w-28 h-0.5 bg-gradient-to-r from-[#362CFF] via-[#BFDBFE] to-[#92A7FF] "></div>
            </div>
            <h3 className="text-xl md:text-xl font-normal mb-8 text-left">
              Strategic Initiatives Stall in Technical Complexity
            </h3>
            <p className="text-gray-300 text-base font-normal leading-relaxed text-left">
              High-value business priorities get buried under system maintenance.
            </p>
          </div>
          
          {/* Section 2 */}
          <div className="text-left ml-16 max-w-[240px]">
            <div className="flex justify-start mb-6">
              <div className="w-28 h-0.5 bg-gradient-to-r from-[#362CFF] via-[#BFDBFE] to-[#92A7FF] "></div>
            </div>
            <h3 className="text-xl md:text-xl font-normal mb-8 text-left">
              AI Mandates Demand Faster Execution
            </h3>
            <p className="text-gray-300 text-base font-normal leading-relaxed text-left">
              Leadership expects AI-accelerated results, but legacy processes can't keep pace.
            </p>
          </div>
          
          {/* Section 3 */}
          <div className="text-left ml-4 max-w-[240px]">
            <div className="flex justify-start mb-6">
              <div className="w-28 h-0.5 bg-gradient-to-r from-[#362CFF] via-[#BFDBFE] to-[#92A7FF] "></div>
            </div>
            <h3 className="text-xl md:text-xl  font-normal mb-8 text-left">
              Elite Teams Spend 80% on Routine Work
            </h3>
            <p className="text-gray-300 text-base font-normal leading-relaxed text-left">
              Your most capable technical talent spends 80% of time on repetitive tasks instead of breakthrough features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
