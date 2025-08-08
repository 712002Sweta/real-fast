import React from 'react';
import aiIcon from '../assets/web-agenda/artificial-intelligence-04.png';
import sparklesIcon from '../assets/web-agenda/sparkles.png';
import noteDoneIcon from '../assets/web-agenda/note-done.png';
import addToListIcon from '../assets/web-agenda/add-to-list.png';
import arrowMoveIcon from '../assets/web-agenda/arrow-move-down-right.png';

const WebinarAgenda = () => {
  return (
    <section className=" py-40 px-4 md:px-8">
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
  );
};

export default WebinarAgenda;
