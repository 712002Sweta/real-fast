import React from 'react';
import cloudIcon from '../assets/hero-section/cloud.png';
import vectorIcon from '../assets/hero-section/Vector.png';
import speaker1 from '../assets/hero-section/speaker1.png';
import speaker2 from '../assets/hero-section/speaker2.png';
import speaker3 from '../assets/hero-section/speaker3.png';

const SpeakersSection = ({ heroElements, isVisible }) => {
  const speakers = [
    { id: 1, name: 'Heather Mao', image: speaker3, icon: cloudIcon, iconAlt: 'Cloud' },
    { id: 2, name: 'Sidu Ponnapa', image: speaker1, icon: vectorIcon, iconAlt: 'Vector' },
    { id: 3, name: 'Aakash Dharmadhikari', image: speaker2, icon: vectorIcon, iconAlt: 'Vector' },
  ];

  return (
    <div
      className={`grid grid-rows-1 grid-flow-col auto-cols-max gap-3 md:gap-6 w-fit max-w-full overflow-hidden items-start ${isVisible ? 'animate' : ''}`}
    >
      {speakers.map((s) => (
        <div
          key={s.id}
          className="flex flex-col items-start justify-start w-28 md:w-40"
        >
          <div className="relative mb-2 md:mb-3 h-10 md:h-20 w-full">
            <img
              src={s.image}
              alt={s.name}
              className="absolute top-0 left-0 w-10 h-10 md:w-20 md:h-20 rounded-full"
            />
            <img
              src={s.icon}
              alt={s.iconAlt}
              className={`absolute -bottom-1 -left-1 md:-left-1 w-4 h-3 md:w-8 md:h-6 ${
                s.name === 'Heather Mao' ? 'ml-1' : ''
              }`}
            />
          </div>

          <div className="flex flex-col items-start">
            <p className="text-white text-sm md:text-xl font-semibold leading-tight">
              {s.name === 'Aakash Dharmadhikari' ? (
                <>
                  Aakash<span className="hidden md:inline"><br /></span>
                  <span className="md:leading-tight">Dharmadhikari</span>
                </>
              ) : (
                s.name
              )}
            </p>

            {s.name === 'Heather Mao' && (
              <>
                <p className="text-white text-xs opacity-80">Strategic Account</p>
                <p className="text-white text-xs opacity-80">Director - Agentforce</p>
                <p className="text-white text-xs opacity-80">Salesforce</p>
              </>
            )}
            {s.name === 'Sidu Ponnapa' && (
              <>
                <p className="text-white text-xs opacity-80">CEO & Co-Founder</p>
                <p className="text-white text-xs opacity-80">realfast</p>
              </>
            )}
            {s.name === 'Aakash Dharmadhikari' && (
              <p className="text-white text-xs opacity-80">CPTO & Co-Founder, Realfast</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpeakersSection;
