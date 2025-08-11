import React from 'react';

const Footer = ({ footerVisible, footerRef, footerElements }) => {
  return (
    <footer ref={footerRef} className={`w-full h-[300px]  relative footer-container ${footerVisible ? 'animate' : ''}`}>
      <div className='py-[20px] flex flex-col lg:flex-row justify-center items-start px-8 lg:gap-[18rem] gap-4'>
        <div className={`text-white text-5xl font-normal footer-left ${footerElements[0] ? 'animate' : ''}`}>
          Transform <br /> Roadmaps into Wins
        </div>

        <div>
          <a href="https://www.realfast.ai/contact">
            <button className={`bg-gray-900/50 py-4 px-9 rounded-xl border border-gray-100/20 text-sm text-white footer-button ${footerElements[1] ? 'animate' : ''}`}>
              Start Your Free EXO Pilot Sprint
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
