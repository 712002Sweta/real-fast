import React from 'react';
import appointmentIcon from '../assets/appointment-02.png';
import zapIcon from '../assets/zap.png';
import notebookIcon from '../assets/notebook.png';

const BenefitsSection = ({ benefitsVisible, benefitsRef, benefitItems }) => {
  return (
    <div ref={benefitsRef} className={`text-white w-full min-h-screen flex justify-center items-center pt-0 benefit-container ${benefitsVisible ? 'animate' : ''}`}>
      {/* Container */}
      <div className='w-full flex flex-col gap-16 max-w-6xl lg:flex-row' style={{ paddingLeft: '9rem', paddingRight: '8rem' }}>
        {/* Left side */}
        <div className={`flex flex-col gap-1 max-w-md benefit-left ${benefitsVisible ? 'animate' : ''}`}>
          <div className='text-[rgba(191,219,254,1)] font-medium text-lg py-2'>The Benefits</div>
          <div className='text-white font-normal text-4xl md:text-4xl lg:text-4xl leading-tight'>
            Stop Salesforce <br /> Delivery Blocking AI
          </div>
        </div>

        {/* Right side */}
        <div className={`flex flex-col ml-12 gap-12 flex-1 benefit-right ${benefitsVisible ? 'animate' : ''}`}>
          {/* Deliver Ahead of Schedule */}
          <div className={`flex lg:items-start items-start justify-start gap-6 benefit-item ${benefitItems[0] ? 'animate' : ''}`}>
            <div className="flex-shrink-0 benefit-icon">
              <img
                src={appointmentIcon}
                alt="Appointment Icon"
                className="w-8 h-8 object-contain mx-auto"
              />
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className="text-xl font-normal">Deliver Ahead of Schedule</h3>
              <p className="text-base font-normal text-gray-400">Transform 3-week development cycles into 1-day sprints.</p>
            </div>
          </div>

          {/* Show Faster AI ROI */}
          <div className={`flex items-start gap-6 benefit-item ${benefitItems[1] ? 'animate' : ''}`}>
            <div className="flex-shrink-0 benefit-icon">
              <img
                src={zapIcon}
                alt="Zap Icon"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className="text-xl font-normal">Show Faster AI ROI</h3>
              <p className="text-base font-normal text-gray-400">Demonstrate measurable AI returns to executives by freeing teams from routine work.</p>
            </div>
          </div>

          {/* Track Every Change Made */}
          <div className={`flex items-start gap-6 benefit-item ${benefitItems[2] ? 'animate' : ''}`}>
            <div className="flex-shrink-0 benefit-icon">
              <img
                src={notebookIcon}
                alt="Notebook Icon"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className="text-xl font-normal">Track Every Change Made</h3>
              <p className="text-base font-normal text-gray-400">Every change tracked, every decision documented for complete visibility.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
