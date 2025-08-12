import React from 'react';

const ProblemSection = ({ problemVisible, problemRef }) => {
  const problemItems = [
    {
      title: "Strategic Initiatives Stall in Technical Complexity",
      description: "High-value business priorities get buried under system maintenance.",
      margin: "ml-0"
    },
    {
      title: "AI Mandates Demand Faster Execution",
      description: "Leadership expects AI-accelerated results, but legacy processes can't keep pace.",
      margin: "ml-0"
    },
    {
      title: "Elite Teams Spend 80% on Routine Work",
      description: "Your most capable technical talent spends 80% of time on repetitive tasks instead of breakthrough features.",
      margin: "ml-0"
    }
  ];

  return (
          <div ref={problemRef} className={`relative pt-28  pb-4 px-8 md:px-48 problem-container ${problemVisible ? 'animate' : ''}`}>
      <div className="max-w-6xl mx-auto text-white">
        {/* Section Title */}
                  <div className="text-left mb-10 md:mb-20">
            <div className={`text-xl md:text-lg font-medium text-[#BFDBFE] ml-4 md:ml-24 mb-3 problem-title ${problemVisible ? 'animate' : ''}`}>The Problem</div>
            <div className={`text-2xl md:text-3xl ml-4 md:ml-24 mr-3 mb-12 md:mb-0 md:mr-0 font-normal leading-tight problem-headline ${problemVisible ? 'animate' : ''}`}>
              Leadership Expects AI Results. Teams Deliver at Legacy Speed.
            </div>
          </div>

        {/* Three Column Layout */}
   {/* Three Column Layout */}
<div className="flex flex-col gap-0 md:grid md:grid-cols-3 md:gap-1 ml-4  mr-3 md:mr-0 md:ml-24">
  {problemItems.map((item, index) => (
    <div
      key={index}
      className={`text-left w-full md:max-w-[240px] problem-item ${problemVisible ? 'animate' : ''}`}
    >
      <div className="flex justify-start mb-3 md:mb-4">
        <div className="w-16 h-0.5 bg-[#BFDBFE]"></div>
      </div>
      <h3 className="text-xl md:text-xl font-normal mb-0 md:mb-4 text-left">
        {item.title}
      </h3>
      <p className="text-gray-400 text-base font-normal leading-relaxed text-left mb-10 md:mb-0">
        {item.description}
      </p>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default ProblemSection;
