import React from 'react';

const Footer = ({ footerVisible, footerRef, footerElements }) => {
  return (
    <footer ref={footerRef} className={`w-full h-[180px] md:h-[300px] relative footer-container mt-8 md:mt-0 ${footerVisible ? 'animate' : ''}`}>
      <div className='py-[5px] md:py-[10px] flex flex-col lg:flex-row justify-start items-start px-4 md:px-8 lg:gap-[16rem] gap-4' style={{ paddingLeft: '1rem', paddingRight: '1rem', '@media (min-width: 768px)': { paddingLeft: '13rem', paddingRight: '11rem' } }}>
        <div className={`text-white text-3xl md:text-5xl font-normal footer-left text-center md:text-left ${footerElements[0] ? 'animate' : ''}`}>
          Transform <br /> Roadmaps into Wins
        </div>

        <div>
          <a href="https://www.realfast.ai/contact">
            <button className={`bg-gray-900/50 py-3 md:py-4 px-6 md:px-9 rounded-xl border border-gray-100/20 text-xs md:text-sm text-white footer-button ${footerElements[1] ? 'animate' : ''}`}>
              Start Your Free EXO Pilot Sprint
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
