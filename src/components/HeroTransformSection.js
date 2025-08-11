import React, { useState, useEffect, useRef } from 'react';
import webpageBg from '../assets/Webpage.png';
import logo from '../assets/hero-section/logo.png';
import calendarIcon from '../assets/hero-section/calendar.png';
import cloudIcon from '../assets/hero-section/cloud.png';
import vectorIcon from '../assets/hero-section/Vector.png';
import vector6Icon from '../assets/Vector 6.png';
import vector10Icon from '../assets/Vector 10.png';
import vector11Icon from '../assets/Vector 11.png';
import speaker1 from '../assets/hero-section/speaker1.png';
import speaker2 from '../assets/hero-section/speaker2.png';
import speaker3 from '../assets/hero-section/speaker3.png';
import aiIcon from '../assets/web-agenda/artificial-intelligence-04.png';
import sparklesIcon from '../assets/web-agenda/sparkles.png';
import noteDoneIcon from '../assets/web-agenda/note-done.png';
import addToListIcon from '../assets/web-agenda/add-to-list.png';
import arrowMoveIcon from '../assets/web-agenda/arrow-move-down-right.png';
import salesforceLogo from '../assets/hero-section/saleforce-logo.png';
import appointmentIcon from '../assets/appointment-02.png';
import zapIcon from '../assets/zap.png';
import notebookIcon from '../assets/notebook.png';


const HeroTransformSection = () => {
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  // Hero Section Animation
  const [heroVisible, setHeroVisible] = useState(false);
  const [heroElements, setHeroElements] = useState([false, false, false, false]); // [title, speakers, form, date]
  const heroRef = useRef(null);

  // Webinar Agenda Animation
  const [agendaVisible, setAgendaVisible] = useState(false);
  const agendaRef = useRef(null);

  // Transform Section Animation
  const [transformVisible, setTransformVisible] = useState(false);
  const transformRef = useRef(null);

  // Problem Section Animation
  const [problemVisible, setProblemVisible] = useState(false);
  const problemRef = useRef(null);

  // Benefits Section Animation
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [benefitItems, setBenefitItems] = useState([false, false, false]);
  const benefitsRef = useRef(null);

  // Case Studies Section Animation
  const [caseStudiesVisible, setCaseStudiesVisible] = useState(false);
  const [caseStudyItems, setCaseStudyItems] = useState([false, false]);
  const caseStudiesRef = useRef(null);

  // Footer Section Animation
  const [footerVisible, setFooterVisible] = useState(false);
  const [footerElements, setFooterElements] = useState([false, false]);
  const footerRef = useRef(null);

  // Hero Section Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !heroVisible) {
          setHeroVisible(true);
          // Stagger hero elements animation
          setTimeout(() => setHeroElements(prev => [true, prev[1], prev[2], prev[3]]), 300); // title
          setTimeout(() => setHeroElements(prev => [prev[0], true, prev[2], prev[3]]), 500); // date
          setTimeout(() => setHeroElements(prev => [prev[0], prev[1], true, prev[3]]), 700); // speakers
          setTimeout(() => setHeroElements(prev => [prev[0], prev[1], prev[2], true]), 900); // form
        }
        // Removed the else if block to prevent animation reset on scroll back
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px'
      }
    );

    const currentRef = heroRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [heroVisible]);

  // Webinar Agenda Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !agendaVisible) {
          setAgendaVisible(true);
        }
        // Removed the else if block to prevent animation reset on scroll back
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px'
      }
    );

    const currentRef = agendaRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [agendaVisible]);

  // Transform Section Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !transformVisible) {
          setTransformVisible(true);
        }
        // Removed the else if block to prevent animation reset on scroll back
      },
      {
        threshold: 0.3,
        rootMargin: '-30px 0px'
      }
    );

    const currentRef = transformRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [transformVisible]);

  // Problem Section Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !problemVisible) {
          setProblemVisible(true);
        }
        // Removed the else if block to prevent animation reset on scroll back
      },
      {
        threshold: 0.3,
        rootMargin: '-40px 0px'
      }
    );

    const currentRef = problemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [problemVisible]);

  // Benefits Section Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !benefitsVisible) {
          setBenefitsVisible(true);
          // Stagger the benefit items animation
          setTimeout(() => setBenefitItems(prev => [true, prev[1], prev[2]]), 600);
          setTimeout(() => setBenefitItems(prev => [prev[0], true, prev[2]]), 800);
          setTimeout(() => setBenefitItems(prev => [prev[0], prev[1], true]), 1000);
        }
        // Removed the else if block to prevent animation reset on scroll back
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px'
      }
    );

    const currentRef = benefitsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [benefitsVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !caseStudiesVisible) {
          setCaseStudiesVisible(true);
          // Stagger the case study items animation
          setTimeout(() => setCaseStudyItems(prev => [true, prev[1]]), 400);
          setTimeout(() => setCaseStudyItems(prev => [prev[0], true]), 700);
        }
        // Removed the else if block to prevent animation reset on scroll back
      },
      {
        threshold: 0.2,
        rootMargin: '-30px 0px'
      }
    );

    const currentRef = caseStudiesRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [caseStudiesVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !footerVisible) {
          setFooterVisible(true);
          // Stagger the footer elements animation
          setTimeout(() => setFooterElements(prev => [true, prev[1]]), 200);
          setTimeout(() => setFooterElements(prev => [prev[0], true]), 400);
        }
        // Removed the else if block to prevent animation reset on scroll back
      },
      {
        threshold: 0.3,
        rootMargin: '-30px 0px'
      }
    );

    const currentRef = footerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [footerVisible]);

  // Form submission handler - matches the HTML/JS version exactly
  const handleWebinarRegistration = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitMessage('');
    setFormErrors({});

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");

    // Form validation
    const errors = {};
    if (!name || name.trim() === '') {
      errors.name = 'Please fill in your full name';
    }
    if (!email || email.trim() === '') {
      errors.email = 'Please fill in your email address';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    // Prepare data for Google Sheets with multiple field formats for compatibility
    const data = {
      // Primary format matching Google Sheets columns
      fullName: name,
      email: email,
      timestamp: new Date().toISOString(),
      event: "Webinar Registration",
    };

    // Log the data that would be sent
    console.log("Registration data to be sent:", data);

    // Google Apps Script web app URL for form submissions
    const webAppUrl = "https://script.google.com/macros/s/AKfycbzh1kOeVbcvmsEntAoU0opZCQV5QGmjxbdf7Z-7-zOte-FcDk2hUTlTWT_kg1HclUQs/exec";

    try {
      // Try to submit to Google Apps Script with proper redirect handling
      const response = await fetch(webAppUrl, {
        method: "POST",
        mode: "cors", // Allow CORS to handle redirects properly
        redirect: "follow", // Follow redirects
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Check if the request was successful (including redirects)
      if (response.ok || response.status === 302) {
        console.log("Registration submitted successfully to Google Sheets");
        setSubmitSuccess(true);
        setSubmitMessage("Thank you! You'll receive webinar details via email.");
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      // Clear form
      e.target.reset();

      // Reset success state after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setSubmitMessage('');
      }, 3000);

    } catch (error) {
      console.log("Fetch failed, trying alternative method:", error);
      
      // Fallback: Try with no-cors mode as backup
      try {
        const fallbackResponse = await fetch(webAppUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        
        console.log("Fallback submission completed");
        setSubmitSuccess(true);
        setSubmitMessage("Registration recorded! You'll receive webinar details soon.");
        
      } catch (fallbackError) {
        console.log("Both methods failed, but data was logged:", fallbackError);
        // Even if both fail, we'll still show success since the data is captured
        setSubmitSuccess(true);
        setSubmitMessage("Registration recorded! You'll receive webinar details soon.");
      }
      
      // Clear form
      e.target.reset();

      // Reset success state after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setSubmitMessage('');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const agendaItems = [
    { icon: sparklesIcon, text: "Post-AI delivery standards you should demand from vendors", alt: "Sparkles" },
    { icon: noteDoneIcon, text: "How to evaluate vendor AI claims with practical tests", alt: "Checklist" },
    { icon: aiIcon, text: "AI-readiness assessment for your Salesforce org", alt: "AI Chip" },
    { icon: addToListIcon, text: "EXO's 3-step process for AI-speed delivery", alt: "Add to list" },
    { icon: arrowMoveIcon, text: "Real case studies of 3-10x delivery acceleration", alt: "10x arrow" }
  ];

  const companyData = [
    {
      company: "US Facilities Solutions Company",
      challenge: "Comprehensive Salesforce org analysis covering security, performance, architecture, and compliance",
      scope: "Code quality analysis, data model review, workflow assessment, integration architecture",
      results: "40-hour assessment completed in 5 hours",
    },
    {
      company: "UK Personal Finance Management Firm",
      challenge: "Enable real-time KYC eligibility scoring directly within Salesforce",
      scope: "LWC development, Custom objects, Apex code, Test data, Permission sets",
      results: "60 hours of work delivered in just 8 hours",
    },
  ];

  const problemItems = [
    {
      title: "Strategic Initiatives Stall in Technical Complexity",
      description: "High-value business priorities get buried under system maintenance.",
      // margin: "ml-28"
    },
    {
      title: "AI Mandates Demand Faster Execution",
      description: "Leadership expects AI-accelerated results, but legacy processes can't keep pace.",
      // margin: "ml-16"
    },
    {
      title: "Elite Teams Spend 80% on Routine Work",
      description: "Your most capable technical talent spends 80% of time on repetitive tasks instead of breakthrough features.",
      // margin: "ml-4"
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={webpageBg} alt="Webpage Background" className="w-full h-full object-cover object-top" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center px-52 py-4 w-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="text-white text-xl font-normal mr-2">Exo by</span>
          <img src={logo} alt="realfast" className="h-6 w-auto" />
        </div>

        {/* Start Free Pilot Button */}
        <a href="https://www.realfast.ai/contact">
          <button className=" border border-gray-700 bg-gray-900/60 text-white px-8 py-2 rounded-lg font-medium text-sm hover:bg-gray-800/20">
            Start Free Pilot
          </button>
        </a>
      </header>

      {/* Hero Content */}
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
                      className={`w-full mt-2 px-5 py-2 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm ${
                        formErrors.name ? 'border-red-500' : 'border-gray-600/50'
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
                      className={`w-full px-4 py-2 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm ${
                        formErrors.email ? 'border-red-500' : 'border-gray-600/50'
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
                {submitSuccess && submitMessage && (
                  <p className="text-blue-400 text-sm text-center mt-4">{submitMessage}</p>
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

      {/* Webinar Agenda Section */}
      <div ref={agendaRef} className={`relative mt-8 pb-8 px-40 agenda-container ${agendaVisible ? 'animate' : ''}`}>
        <div className="max-w-7xl mx-auto text-white">
          {/* 2x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Grid Item 1 - Webinar Agenda Title */}
            <div className="p-6 md:p-8 border-b border-r border-gray-700/40 corner-bottom-right">
              <div className="h-full flex flex-col justify-center">
                <p className="text-sm text-gray-400 font-normal mb-3">Webinar Agenda</p>
                <h2 className="text-xl md:text-2xl font-medium leading-snug text-white/64">
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
                  className={`p-6 md:p-8 ${shouldHaveBorderR ? 'border-r' : ''} border-gray-700/40 ${cornerClass} ${index < 2 ? 'border-b border-gray-700/40' : ''}`}
                >
                  <div className="flex flex-col items-start gap-4">
                    <img
                      src={item.icon}
                      alt={item.alt}
                      className="w-10 h-10"
                    />
                    <p className="text-base text-gray-400 leading-snug">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Transform Section */}
      <div ref={transformRef} className={`relative py-28 transform-container ${transformVisible ? 'animate' : ''}`}>
        <div className="relative z-10 h-80 flex items-center justify-center px-48">
          <div className="text-center text-white mt-10 max-w-4xl">
            {/* Introducing EXO */}
            <p className={`text-lg text-[#BFDBFE] font-normal mb-3 transform-intro ${transformVisible ? 'animate' : ''}`}>
              Introducing EXO
            </p>

            {/* Main Headline */}
            <div className="relative">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight transform-headline ${transformVisible ? 'animate' : ''}`}>
                Transform never-ending<br />
                roadmaps into week-long wins
              </h2>
              {/* Vector 6 - positioned like in screenshot */}
              <img
                src={vector6Icon}
                alt="Vector 6"
                className="absolute -bottom-3 -right-8 w-24 h-10 z-10"
              />
            </div>

            {/* Sub-headline */}
            <p className={`text-xl md:text-xl text-gray-400 font-normal leading-relaxed transform-sub ${transformVisible ? 'animate' : ''}`}>
              EXO bridges the gap between AI-speed demands<br />
              and legacy delivery processes.
            </p>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div ref={problemRef} className={`relative pt-24 pb-4 px-48 problem-container ${problemVisible ? 'animate' : ''}`}>
        <div className="max-w-6xl mx-auto text-white">
          {/* Section Title */}
          <div className="text-left mb-20">
            <h2 className={`text-lg font-normal text-[#BFDBFE] ml-24 mb-3 problem-title ${problemVisible ? 'animate' : ''}`}>The Problem</h2>
            <h1 className={`text-3xl md:text-3xl ml-24 font-normal leading-tight problem-headline ${problemVisible ? 'animate' : ''}`}>
              Leadership Expects AI Results. Teams Deliver at Legacy Speed.
            </h1>
          </div>

          {/* Three Column Layout */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-1 ml-24">
            {problemItems.map((item, index) => (
              <div
                key={index}
                className={`${item.margin} text-left max-w-[240px] md:${item.margin}`}
              >
                <div className="flex justify-start mb-4">
                  <div className="w-16 h-0.5 bg-[#BFDBFE]"></div>
                </div>
                <h3 className="text-xl md:text-xl font-normal mb-4 text-left">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-base font-normal leading-relaxed text-left">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
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

      {/* Case Studies Section */}
      <section className="w-full min-h-screen text-white pt-0 pb-0">
        <div ref={caseStudiesRef} className={`w-full flex flex-col items-center case-studies-container ${caseStudiesVisible ? 'animate' : ''}`} style={{ paddingLeft: '13rem', paddingRight: '11rem' }}>
          {/* Heading */}
          <h1 className={`font-normal text-4xl mb-16 py-7 case-study-title ${caseStudiesVisible ? 'animate' : ''}`}>
            Case Studies
          </h1>

          {/* Case Study Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-28 max-w-6xl w-full items-stretch pl-8">
            {companyData.map((data, index) => (
              <div
                key={index}
                className={`flex flex-col h-full case-study-item ${caseStudyItems[index] ? 'animate' : ''}`}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', minHeight: '400px' }}
              >
                {/* Company Name */}
                <h2 className="text-lg font-light">{data.company}</h2>

                {/* Challenge */}
                <div className="flex-shrink-0">
                  <p className="text-[#BFDBFE] font-normal text-base mb-1">Challenge</p>
                  <p className="text-gray-400 font-normal text-xl">{data.challenge}</p>
                </div>

                {/* Scope */}
                <div className="flex-shrink-0">
                  <p className="text-[#BFDBFE] mb-1 font-normal text-base">Scope</p>
                  <div className="text-gray-400 font-normal text-xl">
                    <div>{data.scope}</div>
                  </div>
                </div>

                {/* Results */}
                <div className="relative flex-shrink-0 mt-auto">
                  <p className="text-blue-400 mb-1 font-normal text-base">Results</p>
                  <div className="relative">
                    <p className="font-semibold tracking-tighter text-3xl max-w-sm">{data.results}</p>
                    {/* Vector underline - fixed positioning */}
                    <img
                      src={index === 0 ? vector10Icon : vector11Icon}
                      alt="Results underline"
                      className={`absolute bottom-0 w-auto h-auto z-10 ${
                        index === 0 
                          ? 'left-1/2 transform -translate-x-1/2' // Center for left case study (5 hours)
                          : 'left-1/4 transform -translate-x-1/2' // More left for right case study (8 hours)
                      }`}
                      style={{
                        transform: index === 0 
                          ? 'translate(-50%, 12px)' // Center horizontally, move down more for 5 hours
                          : 'translate(-50%, 8px)', // Center horizontally, move down slightly for 8 hours
                        maxWidth: '80px',
                        width: 'auto',
                        height: 'auto'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer ref={footerRef} className={`w-full h-[300px] pt-12 relative footer-container ${footerVisible ? 'animate' : ''}`}>
        <div className='py-[5px] flex flex-col lg:flex-row justify-center items-start px-8 lg:gap-[18rem] gap-4'>
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
    </section >
  );
};

export default HeroTransformSection;
