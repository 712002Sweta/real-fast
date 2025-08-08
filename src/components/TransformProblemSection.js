import React from 'react';
import groupBg from '../assets/group-bg.png';
import aiIcon from '../assets/web-agenda/artificial-intelligence-04.png';
import sparklesIcon from '../assets/web-agenda/sparkles.png';
import noteDoneIcon from '../assets/web-agenda/note-done.png';
import addToListIcon from '../assets/web-agenda/add-to-list.png';
import arrowMoveIcon from '../assets/web-agenda/arrow-move-down-right.png';

const TransformProblemSection = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={groupBg} alt="Group Background" className="w-full h-full object-cover object-center" />
      </div>

            {/* Webinar Agenda Section */}
            <section className="py-40 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-white">
          {/* 2x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Grid Item 1 - Webinar Agenda Title */}
            <div className="p-6 md:p-8 border-b border-gray-700/40 border-r border-gray-700/40">
              <div className="h-full flex flex-col justify-center">
                <p className="text-sm text-gray-400 font-normal mb-3">Webinar Agenda</p>
                <h2 className="text-xl md:text-2xl font-medium leading-snug text-white/64">
                  Why traditional IT delivery models are failing in the AI era
                </h2>
              </div>
            </div>

            {/* Grid Item 2 - Sparkles */}
            <div className="p-6 md:p-8 border-gray-700/40 border-r border-gray-700/40 border-b border-gray-700/40">
              <div className="flex flex-col items-start gap-4">
                <img src={sparklesIcon} alt="Sparkles" className="w-10 h-10" />
                <p className="text-base text-gray-400 leading-snug">
                  Post-AI delivery standards you should demand from vendors
                </p>
              </div>
            </div>

            {/* Grid Item 3 - Checklist */}
            <div className="p-6 md:p-8 border-gray-700/40 border-b border-gray-700/40">
              <div className="flex flex-col items-start gap-4">
                <img src={noteDoneIcon} alt="Checklist" className="w-10 h-10" />
                <p className="text-base text-gray-400 leading-snug">
                  How to evaluate vendor AI claims with practical tests
                </p>
              </div>
            </div>

            {/* Grid Item 4 - AI Chip */}
            <div className="p-6 md:p-8 border-gray-700/40 border-r border-gray-700/40">
              <div className="flex flex-col items-start gap-4">
                <img src={aiIcon} alt="AI Chip" className="w-10 h-10" />
                <p className="text-base text-gray-400 leading-snug">
                  AI-readiness assessment for your Salesforce org
                </p>
              </div>
            </div>

            {/* Grid Item 5 - Add to List */}
            <div className="p-6 md:p-8 border-gray-700/40 border-r border-gray-700/40">
              <div className="flex flex-col items-start gap-4">
                <img src={addToListIcon} alt="Add to list" className="w-10 h-10" />
                <p className="text-base text-gray-400 leading-snug">
                  EXO's 3-step process for AI-speed delivery
                </p>
              </div>
            </div>

            {/* Grid Item 6 - Arrow */}
            <div className="p-6 md:p-8 border-gray-700/40">
              <div className="flex flex-col items-start gap-4">
                <img src={arrowMoveIcon} alt="10x arrow" className="w-10 h-10" />
                <p className="text-base text-gray-400 leading-snug">
                  Real case studies of 3-10x delivery acceleration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Transform Section */}
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
            <p className="text-xl md:text-xl text-gray-300 font-normal leading-relaxed">
              EXO bridges the gap between AI-speed demands and legacy delivery processes.
            </p>
          </div>
        </div>
      </section>



      {/* Problem Section */}
      <section className="py-40 px-16">
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
            <div className="ml-28 text-left max-w-[240px]">
              <div className="flex justify-start mb-6">
                <div className="w-28 h-0.5 bg-gradient-to-r from-[#362CFF] via-[#BFDBFE] to-[#92A7FF]"></div>
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
                <div className="w-28 h-0.5 bg-gradient-to-r from-[#362CFF] via-[#BFDBFE] to-[#92A7FF]"></div>
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
                <div className="w-28 h-0.5 bg-gradient-to-r from-[#362CFF] via-[#BFDBFE] to-[#92A7FF]"></div>
              </div>
              <h3 className="text-xl md:text-xl font-normal mb-8 text-left">
                Elite Teams Spend 80% on Routine Work
              </h3>
              <p className="text-gray-300 text-base font-normal leading-relaxed text-left">
                Your most capable technical talent spends 80% of time on repetitive tasks instead of breakthrough features.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransformProblemSection;
