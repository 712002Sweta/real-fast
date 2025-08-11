import React from 'react';
import aiIcon from '../assets/web-agenda/artificial-intelligence-04.png';
import sparklesIcon from '../assets/web-agenda/sparkles.png';
import noteDoneIcon from '../assets/web-agenda/note-done.png';
import addToListIcon from '../assets/web-agenda/add-to-list.png';
import arrowMoveIcon from '../assets/web-agenda/arrow-move-down-right.png';

const WebinarAgenda = ({ agendaVisible, agendaRef }) => {
  const agendaItems = [
    {
      icon: aiIcon,
      alt: "AI Icon",
      text: "Why AI projects fail in traditional delivery models"
    },
    {
      icon: sparklesIcon,
      alt: "Sparkles Icon",
      text: "How EXO accelerates AI implementation by 10x"
    },
    {
      icon: noteDoneIcon,
      alt: "Note Done Icon",
      text: "Real-world case studies and ROI metrics"
    },
    {
      icon: addToListIcon,
      alt: "Add to List Icon",
      text: "Implementation roadmap and next steps"
    },
    {
      icon: arrowMoveIcon,
      alt: "Arrow Move Icon",
      text: "Q&A session with industry experts"
    }
  ];

  return (
        <div ref={agendaRef} className={`relative mt-8 md:mt-0 pb-4 md:pb-8 px-4 md:px-40 agenda-container ${agendaVisible ? 'animate' : ''}`}>
      <div className="max-w-7xl mx-auto text-white">
        {/* 2x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Grid Item 1 - Webinar Agenda Title */}
          <div className="p-3 md:p-8 border-b md:border-b border-r md:border-r border-gray-700/40 corner-bottom-right">
            <div className="h-full flex flex-col justify-center">
              <p className="text-sm text-gray-400 font-normal mb-2 md:mb-3">Webinar Agenda</p>
              <h2 className="text-lg md:text-2xl font-medium leading-snug text-white/64">
                Why traditional IT delivery models are failing in the AI era.
              </h2>
            </div>
          </div>

          {/* Agenda Items */}
          {agendaItems.map((item, index) => {
            let cornerClass = '';
            if (index === 0) cornerClass = 'corner-bottom-right';
            if (index === 1) cornerClass = 'corner-bottom-left';
            if (index === 3) cornerClass = 'corner-top-left';
            if (index === 4) cornerClass = 'corner-top-left';

            // Don't add border-r to the last column items (index 1 and 4)
            const shouldHaveBorderR = index !== 1 && index !== 4;

            return (
                                              <div
                  key={index}
                  className={`p-3 md:p-8 ${shouldHaveBorderR ? 'md:border-r' : ''} border-gray-700/40 ${cornerClass} ${index < 2 ? 'md:border-b' : ''}`}
                >
                  <div className="flex flex-col items-start gap-1 md:gap-4">
                    <img
                      src={item.icon}
                      alt={item.alt}
                      className="w-6 h-6 md:w-10 md:h-10"
                    />
                    <p className="text-xs md:text-base text-gray-400 leading-snug">
                      {item.text}
                    </p>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WebinarAgenda;
