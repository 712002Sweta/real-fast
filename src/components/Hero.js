import React from 'react';
import heroBg from '../assets/hero-section/hero-bg.png';
import calendarIcon from '../assets/hero-section/calendar.png';
import clockIcon from '../assets/hero-section/clock.png';
import speaker1 from '../assets/hero-section/speaker1.png';
import speaker2 from '../assets/hero-section/speaker2.png';
import speaker3 from '../assets/hero-section/speaker3.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover object-center" />
      </div>
      
      {/* Glowing Lines Effect */}
      <div className="glow-lines"></div>
      
      {/* Content */}
      <div className="relative z-10 flex min-h-screen">
        {/* Left Section - Webinar Details & Speakers */}
        <div className="flex-1 flex flex-col justify-start pt-40 ml-20 px-8">
          <div className="max-w-2xl">
            {/* Webinar Introduction */}
            <p className="text-white text-lg font-normal  mb-8">
            Join us for an exclusive webinar
            </p>
            
            {/* Main Title */}
            <h1 className="text-white text-5xl font-normal mb-4">
              AI-Ready Salesforce
            </h1>
            
            {/* Sub-headline with underline */}
            <div className="mb-8">
              <h2 className="text-white text-3xl font-normal">
                Transform Your Delivery Speed
              </h2>
              <div className="delivery-underline w-48"></div>
            </div>
            
            {/* Date and Time */}
            <div className="flex flex-col space-y-4 mb-12">
              <div className="flex items-center space-x-2">
                <img src={calendarIcon} alt="Calendar" className="w-6 h-6" />
                <span className="text-white text-xl">August 13, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={clockIcon} alt="Clock" className="w-6 h-6" />
                <span className="text-white text-xl">2:00 PM SGT (45-min)</span>
              </div>
            </div>
            
            {/* Speakers Section */}
            <div className="flex space-6">
              {/* Speaker 1 - Heather */}
              <div className="w-[224px] h-[84px] flex items-center space-x-4">
                <img src={speaker3} alt="Heather Mao" className="w-[84px] h-[84px] rounded-full flex-shrink-0" />
                <div className="w-[124px] h-[74px] text-left mt-2">
                  <p className="text-white text-sm font-semibold whitespace-nowrap">Heather Mao</p>
                  <p className="text-white text-xs opacity-80">
                    Strategic Account<br />
                    Director - Agentforce<br />
                    Salesforce
                  </p>
                </div>
              </div>
              
              {/* Speaker 2 - Sidu */}
              <div className="w-[224px] h-[84px] flex items-center space-x-4 ml-4">
                <img src={speaker1} alt="Sidu Ponnapa" className="w-[84px] h-[84px] rounded-full flex-shrink-0" />
                <div className="w-[124px] h-[74px] text-left mt-2">
                  <p className="text-white text-sm font-semibold whitespace-nowrap">Sidu Ponnapa</p>
                  <p className="text-white text-xs opacity-80">CEO & Co-founder, realfast</p>
                </div>
              </div>
              
              {/* Speaker 3 - Aakash */}
              <div className="w-[224px] h-[84px] flex items-center space-x-4">
                <img src={speaker2} alt="Aakash Dharmadhikari" className="w-[84px] h-[84px] rounded-full flex-shrink-0" />
                <div className="w-[124px] h-[74px] text-left mt-2">
                  <p className="text-white text-sm font-semibold">Aakash Dharmadhikari</p>
                  <p className="text-white text-xs opacity-80">Co-Founder, realfast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Registration Form */}
        <div className="flex-1 flex items-start justify-center px-8 pt-40">
          <div className="w-full max-w-sm relative">
                        <div className="absolute inset-0 rounded-2xl  opacity-32 p-[0.5px]">
              <div className="w-full h-full bg-black/40 rounded-2xl"></div>
            </div>
            <div className="relative z-10 p-8">
              <form className="space-y-8">
                {/* Full Name Field */}
                <div>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Full Name"
                    className="w-full px-4 py-4 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  />
                </div>
                
                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email ID"
                    className="w-full px-4 py-4 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  />
                </div>
                
                {/* Register Button */}
                <button
                  type="submit"
                  className="w-full bg-[#1D4ED8] hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-colors text-sm"
                >
                  Register Now
                </button>
              </form>
              
              {/* Disclaimer */}
              <p className="text-gray-300 text-xs text-center mt-8 leading-relaxed">
                This webinar is co-presented with Salesforce and limited to 100 senior technical and business leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
