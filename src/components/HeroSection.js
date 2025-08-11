import React from 'react';
import calendarIcon from '../assets/hero-section/calendar.png';
import cloudIcon from '../assets/hero-section/cloud.png';
import vectorIcon from '../assets/hero-section/Vector.png';
import speaker1 from '../assets/hero-section/speaker1.png';
import speaker2 from '../assets/hero-section/speaker2.png';
import speaker3 from '../assets/hero-section/speaker3.png';
import salesforceLogo from '../assets/hero-section/saleforce-logo.png';

const HeroSection = ({ 
  heroVisible, 
  heroElements, 
  heroRef, 
  isSubmitting, 
  submitSuccess, 
  formErrors, 
  handleWebinarRegistration 
}) => {
  return (
    <div ref={heroRef} className={`relative z-10 flex min-h-screen pt-0 hero-container ${heroVisible ? 'animate' : ''}`}>
      {/* Left Section - Webinar Details & Speakers */}
      <div className="flex-1 flex flex-col md:flex-col flex-row justify-start items-center md:items-center items-start pt-36 md:pt-36 pt-20 pl-52 pr-40 md:pl-52 md:pr-40 pl-8 pr-8">
        <div className="max-w-2xl">
          {/* Webinar Introduction */}
          <p className={`text-gray-400 text-sm md:text-lg font-normal mb-3 md:mb-6 hero-title ${heroElements[0] ? 'animate' : ''}`}>
            Join us for an exclusive webinar
          </p>

          {/* Main Title */}
          <h1 className={`text-[#FAFAFA] text-2xl md:text-5xl font-normal mb-2 md:mb-3 whitespace-nowrap hero-title ${heroElements[0] ? 'animate' : ''}`}>
            AI-Ready Salesforce
          </h1>

          {/* Sub-headline */}
          <div className={`mb-4 md:mb-8 hero-title ${heroElements[0] ? 'animate' : ''}`}>
            <h2 className="text-[#FAFAFA] text-lg md:text-3xl font-normal">
              Transform Your Delivery Speed
            </h2>
          </div>

          {/* Date and Time */}
          <div className={`flex items-center space-x-2 md:space-x-4 mb-6 md:mb-10 hero-date ${heroElements[1] ? 'animate' : ''}`}>
            <img src={calendarIcon} alt="Calendar" className="w-4 h-4 md:w-6 md:h-6" />
            <span className="text-[#FAFAFA] text-sm md:text-xl">13 August, 2:00 PM SGT (45 min)</span>
          </div>

          {/* Speakers Section */}
          <div className={`flex space-x-4 md:space-x-10 hero-speakers ${heroElements[2] ? 'animate' : ''}`}>
            {/* Speaker 1 - Heather */}
            <div className="flex flex-col items-start w-20 md:w-40">
              <div className="relative mb-2 md:mb-3">
                <img src={speaker3} alt="Heather Mao" className="w-[60px] h-[60px] md:w-[84px] md:h-[84px] rounded-full" />
                {/* Cloud Icon */}
                <img
                  src={cloudIcon}
                  alt="Cloud"
                  className="absolute -bottom-1 -left-1 w-6 h-4 md:w-8 md:h-6 z-10"
                />
              </div>
              <p className="text-white text-sm md:text-xl font-semibold mt-1 mb-1">Heather Mao</p>
              <p className="text-white text-xs opacity-80 mb-0">Strategic Account</p>
              <p className="text-white text-xs opacity-80 mb-0">Director - Agentforce</p>
              <p className="text-white text-xs opacity-80">Salesforce</p>
            </div>

            {/* Speaker 2 - Sidu */}
            <div className="flex flex-col items-start w-20 md:w-40">
              <div className="relative mb-2 md:mb-3">
                <img src={speaker1} alt="Sidu Ponnapa" className="w-[60px] h-[60px] md:w-[84px] md:h-[84px] rounded-full" />
                {/* Vector Icon */}
                <img
                  src={vectorIcon}
                  alt="Vector"
                  className="absolute -bottom-1 -left-1 w-6 h-4 md:w-8 md:h-4 z-10"
                />
              </div>
              <p className="text-white text-sm md:text-xl font-semibold mt-1 mb-1">Sidu Ponnapa</p>
              <p className="text-white text-xs opacity-80 mb-0">CEO & Co-Founder</p>
              <p className="text-white text-xs opacity-80">realfast</p>
            </div>

            {/* Speaker 3 - Aakash */}
            <div className="flex flex-col items-start w-20 md:w-40">
              <div className="relative mb-2 md:mb-3">
                <img src={speaker2} alt="Aakash Dharmadhikari" className="w-[60px] h-[60px] md:w-[84px] md:h-[84px] rounded-full" />
                {/* Vector Icon */}
                <img
                  src={vectorIcon}
                  alt="Vector"
                  className="absolute -bottom-1 -left-1 w-6 h-4 md:w-8 md:h-4 z-10"
                />
              </div>
              <p className="text-white text-sm md:text-xl font-semibold mt-1 mb-1">Aakash Dharmadhikari</p>
              <p className="text-white text-xs opacity-80">CPTO & Co-Founder, Realfast</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Registration Form */}
      <div className={`flex-1 flex items-start justify-start pr-40 md:pr-40 pr-8 pt-36 hero-form ${heroElements[3] ? 'animate' : ''}`}>
        <div className="w-full max-w-lg">
          <div className="flex justify-center mb-8">
            <img src={salesforceLogo} alt="Salesforce" className="h-12 md:h-16 w-auto" />
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-2xl opacity-32 p-[0.5px]">
              <div className="w-full h-full bg-black/40 rounded-2xl"></div>
            </div>
            <div className="relative z-10 p-6 md:p-8">
              <form className="space-y-4" id="webinar-registration" onSubmit={handleWebinarRegistration}>
                {/* Full Name Field */}
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    required
                    className={`w-full mt-2 px-5 py-2 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm ${formErrors.name ? 'border-red-500' : 'border-gray-600/50'
                      }`}
                  />
                  {formErrors.name && (
                    <p className="text-gray-400 text-xs mt-1">{formErrors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className={`w-full px-4 py-2 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm ${formErrors.email ? 'border-red-500' : 'border-gray-600/50'
                      }`}
                  />
                  {formErrors.email && (
                    <p className="text-gray-400 text-xs mt-1">{formErrors.email}</p>
                  )}
                </div>

                {/* Register Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1D4ED8] hover:bg-blue-800 text-white font-medium py-3 md:py-4 px-4 md:px-6 rounded-xl text-xs md:text-sm primary-button large"
                >
                  {isSubmitting ? 'Registering...' : submitSuccess ? 'Registration Successful!' : 'Register for Webinar'}
                </button>
              </form>

              {/* Success Message */}
              {submitSuccess && (
                <p className="text-blue-400 text-sm text-center mt-4">Thank you! You'll receive webinar details via email.</p>
              )}

              {/* Disclaimer */}
              <p className="text-gray-400 text-xs text-center mt-6 leading-relaxed">
                This webinar is co-presented with Salesforce and limited to 100 senior technical and business leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
