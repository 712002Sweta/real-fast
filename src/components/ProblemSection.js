import React from 'react';

const ProblemSection = ({ problemVisible, problemRef }) => {
  const problemItems = [
    {
      title: "Legacy Delivery Models",
      description: "Traditional waterfall and agile methodologies can't keep pace with AI's rapid iteration cycles, causing delays and missed opportunities.",
      margin: "ml-0"
    },
    {
      title: "Team Bottlenecks",
      description: "Manual processes and approval workflows create unnecessary delays, preventing teams from delivering AI solutions at the speed of business.",
      margin: "ml-0"
    },
    {
      title: "Lack of Visibility",
      description: "Executives struggle to track progress and ROI of AI initiatives, leading to reduced confidence and slower adoption.",
      margin: "ml-0"
    }
  ];

  return (
          <div ref={problemRef} className={`relative pt-24 pb-4 px-4 md:px-48 problem-container ${problemVisible ? 'animate' : ''}`}>
      <div className="max-w-6xl mx-auto text-white">
        {/* Section Title */}
                  <div className="text-left mb-20">
            <h2 className={`text-lg font-normal text-[#BFDBFE] ml-0 md:ml-24 mb-3 problem-title ${problemVisible ? 'animate' : ''}`}>The Problem</h2>
            <h1 className={`text-2xl md:text-3xl ml-0 md:ml-24 font-normal leading-tight problem-headline ${problemVisible ? 'animate' : ''}`}>
              Leadership Expects AI Results. Teams Deliver at Legacy Speed.
            </h1>
          </div>

        {/* Three Column Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-1 ml-0 md:ml-24">
          {problemItems.map((item, index) => (
            <div
              key={index}
              className={`${item.margin} text-left max-w-[240px] md:${item.margin}`}
            >
              <div className="flex justify-start mb-4">
                <div className="w-16 h-0.5 bg-[#BFDBFE]"></div>
              </div>
              <h3 className="text-xl md:text-xl font-normal mb-4 text-left">
                {item.title}
              </h3>
              <p className="text-gray-400 text-base font-normal leading-relaxed text-left">
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
