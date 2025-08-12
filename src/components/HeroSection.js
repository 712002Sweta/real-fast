import React from 'react';
import calendarIcon from '../assets/hero-section/calendar.png';
import salesforceLogo from '../assets/hero-section/saleforce-logo.png';
import SpeakersSection from './SpeakersSection';

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
    <div ref={heroRef} className={`relative z-1 flex  h-[850px] md:h-[780px] pt-0 hero-container ${heroVisible ? 'animate' : ''}`}>
      {/* Left Section - Webinar Details & Speakers */}
      <div className="flex-1 flex md:flex-col flex-row justify-start items-start md:items-center pt-12 md:pt-36 pl-6 pr-6 md:pl-52 md:pr-40">
        <div className="max-w-2xl w-full" style={{ width: '100%' }}>
          {/* Webinar Introduction */}
          <p className={`text-gray-400 text-lg md:text-lg font-normal mb-2 md:mb-6 hero-title text-left ${heroElements[0] ? 'animate' : ''}`}>
            Join us for an exclusive webinar
          </p>

          {/* Main Title */}
          <h1 className={`text-[#FAFAFA] text-5xl md:text-5xl font-normal mb-2 md:mb-3 hero-title text-left ${heroElements[0] ? 'animate' : ''}`}>
            AI-Ready Salesforce
          </h1>

          {/* Sub-headline */}
          <div className={`mb-2 md:mb-8 hero-title ${heroElements[0] ? 'animate' : ''}`}>
            <h2 className="text-[#FAFAFA] text-3xl md:text-3xl font-normal text-left">
              Transform Your Delivery Speed
            </h2>
          </div>

          {/* Date and Time */}
          <div className={`flex items-center space-x-2 md:space-x-4 mb-4 md:mb-10 hero-date ${heroElements[1] ? 'animate' : ''}`}>
            <img src={calendarIcon} alt="Calendar" className="w-3 h-3 md:w-6 md:h-6 mb-2 md:mb-0" />
            <span className="text-[#FAFAFA] text-xl md:text-xl text-left mb-2 md:mb-0">13 August, 2:00 PM SGT (45 min)</span>
          </div>

                      {/* Speakers Section */}
            <div className="w-full overflow-hidden">
              <SpeakersSection 
                heroElements={heroElements}
                isVisible={heroElements[2]}
              />
            </div>
        </div>
      </div>

              {/* Right Section - Registration Form */}
        <div className={`flex-1 flex items-start justify-start pr-6 md:pr-48 pt-8 md:pt-36 hero-form ${heroElements[3] ? 'animate' : ''}`}>
        <div className="w-full max-w-lg">
          {/* Salesforce Logo - Hidden on mobile, shown above form on desktop */}
          <div className="hidden md:flex justify-center mb-4 md:mb-8">
            <img src={salesforceLogo} alt="Salesforce" className="h-12 md:h-16 w-auto" />
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-2xl opacity-32 p-[0.5px]">
              <div className="w-full h-full bg-black/40 rounded-2xl"></div>
            </div>
            <div className="relative z-10 p-4 md:p-8 mb-12 md:mb-0">
              <form className="space-y-3 md:space-y-4" id="webinar-registration" onSubmit={handleWebinarRegistration}>
                {/* Full Name Field */}
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    required
                    className={`w-full mt-2 px-4 md:px-5 py-2 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm ${formErrors.name ? 'border-red-500' : 'border-gray-600/50'
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
                  className="w-full bg-[#1D4ED8] hover:bg-blue-800 text-white font-medium py-2 md:py-4 px-4 md:px-6 rounded-xl text-xs md:text-sm primary-button large"
                >
                  {isSubmitting ? 'Registering...' : submitSuccess ? 'Registration Successful!' : 'Register for Webinar'}
                </button>
              </form>

              {/* Success Message */}
              {submitSuccess && (
                <p className="text-blue-400 text-sm text-center mt-4">Thank you! You'll receive webinar details via email.</p>
              )}

              {/* Disclaimer */}
              <p className="text-gray-400 text-xs text-center mt-4 md:mt-6 leading-relaxed">
                This webinar is co-presented with Salesforce and limited to 100 senior technical and business leaders.
              </p>
            </div>
          </div>
        </div>

        {/* Salesforce Logo - Shown below form container on mobile only */}
        <div className="flex md:hidden justify-center mt-2 mb-6">
          <img src={salesforceLogo} alt="Salesforce" className="h-12 md:h-16 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
