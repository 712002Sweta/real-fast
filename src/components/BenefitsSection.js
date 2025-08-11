import React from 'react';
import appointmentIcon from '../assets/appointment-02.png';
import zapIcon from '../assets/zap.png';
import notebookIcon from '../assets/notebook.png';

const BenefitsSection = ({ benefitsVisible, benefitsRef, benefitItems }) => {
  return (
    <div ref={benefitsRef} className={`text-white w-full  h-[750px] md:h-[800px] flex justify-center items-center pt-4 md:pt-0 pb-4 md:pb-0 benefit-container ${benefitsVisible ? 'animate' : ''}`}>
              {/* Container */}
        <div className='w-full flex flex-col gap-8 md:gap-16 max-w-4xl lg:flex-row px-8 md:px-0' style={{ paddingLeft: '2rem', paddingRight: '2rem', '@media (min-width: 768px)': { paddingLeft: '9rem', paddingRight: '8rem' } }}>
          {/* Left side */}
          <div className={`flex flex-col gap-1 max-w-md benefit-left text-left ${benefitsVisible ? 'animate' : ''}`}>
            <div className='text-[rgba(191,219,254,1)] font-medium text-lg py-2'>The Benefits</div>
            <div className='text-white font-normal text-3xl md:text-4xl lg:text-4xl leading-tight'>
              Stop Salesforce <br /> Delivery Blocking AI
            </div>
          </div>

          {/* Right side */}
          <div className={`flex flex-col ml-0 md:ml-12 gap-8 md:gap-12 flex-1 benefit-right ${benefitsVisible ? 'animate' : ''}`}>
                      {/* Deliver Ahead of Schedule */}
            <div className={`flex lg:items-start items-start justify-start gap-4 md:gap-6 benefit-item border-0 md:border-0 ${benefitItems[0] ? 'animate' : ''}`}>
              <div className="flex-shrink-0 benefit-icon">
                <img
                  src={appointmentIcon}
                  alt="Appointment Icon"
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                />
              </div>
              <div className='flex flex-col gap-1 md:gap-2 items-start'>
                <h3 className="text-lg md:text-xl font-normal text-left">Deliver Ahead of Schedule</h3>
                <p className="text-sm md:text-base font-normal text-gray-400 text-left">Transform 3-week development cycles into 1-day sprints.</p>
              </div>
            </div>

            {/* Show Faster AI ROI */}
            <div className={`flex items-start gap-4 md:gap-6 benefit-item border-0 md:border-0 ${benefitItems[1] ? 'animate' : ''}`}>
              <div className="flex-shrink-0 benefit-icon">
                <img
                  src={zapIcon}
                  alt="Zap Icon"
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                />
              </div>
              <div className='flex flex-col gap-1 md:gap-2 items-start'>
                <h3 className="text-lg md:text-xl font-normal text-left">Show Faster AI ROI</h3>
                <p className="text-sm md:text-base font-normal text-gray-400 text-left">Demonstrate measurable AI returns to executives by freeing teams from routine work.</p>
              </div>
            </div>

            {/* Track Every Change Made */}
            <div className={`flex items-start gap-4 md:gap-6 benefit-item border-0 md:border-0 ${benefitItems[2] ? 'animate' : ''}`}>
              <div className="flex-shrink-0 benefit-icon">
                <img
                  src={notebookIcon}
                  alt="Notebook Icon"
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                />
              </div>
              <div className='flex flex-col gap-1 md:gap-2 items-start'>
                <h3 className="text-lg md:text-xl font-normal text-left">Track Every Change Made</h3>
                <p className="text-sm md:text-base font-normal text-gray-400 text-left">Every change tracked, every decision documented for complete visibility.</p>
              </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
