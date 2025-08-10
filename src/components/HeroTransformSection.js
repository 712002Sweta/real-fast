import React, { useState, useEffect, useRef } from 'react';
import webpageBg from '../assets/Webpage.png';
import logo from '../assets/hero-section/logo.png';
import calendarIcon from '../assets/hero-section/calendar.png';
import cloudIcon from '../assets/hero-section/cloud.png';
import vectorIcon from '../assets/hero-section/Vector.png';
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
        } else if (!entry.isIntersecting && heroVisible) {
          setHeroVisible(false);
          setHeroElements([false, false, false, false]);
        }
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
        } else if (!entry.isIntersecting && agendaVisible) {
          setAgendaVisible(false);
        }
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
        } else if (!entry.isIntersecting && transformVisible) {
          setTransformVisible(false);
        }
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
        } else if (!entry.isIntersecting && problemVisible) {
          setProblemVisible(false);
        }
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
        } else if (!entry.isIntersecting && benefitsVisible) {
          // Reset animations when section leaves viewport
          setBenefitsVisible(false);
          setBenefitItems([false, false, false]);
        }
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
        } else if (!entry.isIntersecting && caseStudiesVisible) {
          // Reset animations when section leaves viewport
          setCaseStudiesVisible(false);
          setCaseStudyItems([false, false]);
        }
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
        } else if (!entry.isIntersecting && footerVisible) {
          // Reset animations when section leaves viewport
          setFooterVisible(false);
          setFooterElements([false, false]);
        }
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
      margin: "ml-28"
    },
    {
      title: "AI Mandates Demand Faster Execution",
      description: "Leadership expects AI-accelerated results, but legacy processes can't keep pace.",
      margin: "ml-16"
    },
    {
      title: "Elite Teams Spend 80% on Routine Work",
      description: "Your most capable technical talent spends 80% of time on repetitive tasks instead of breakthrough features.",
      margin: "ml-4"
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={webpageBg} alt="Webpage Background" className="w-full h-full object-cover object-top" />
      </div>
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center px-48 py-4 w-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="text-white text-xl font-normal mr-2">Exo by</span>
          <img src={logo} alt="realfast" className="h-6 w-auto" />
        </div>

        {/* Start Free Pilot Button */}
        <button className=" border border-gray-700 bg-gray-900/60 text-white px-8 py-2 rounded-lg font-medium text-sm hover:bg-gray-800/20">
          Start Free Pilot
        </button>
      </header>
      
      {/* Hero Content */}
      <div ref={heroRef} className={`relative z-10 flex min-h-screen pt-0 hero-container ${heroVisible ? 'animate' : ''}`}>
        {/* Left Section - Webinar Details & Speakers */}
        <div className="flex-1 flex flex-col justify-start pt-36 pl-48 pr-48">
          <div className="max-w-2xl">
            {/* Webinar Introduction */}
            <p className={`text-gray-400 text-lg font-normal mb-6 hero-title ${heroElements[0] ? 'animate' : ''}`}>
            Join us for an exclusive webinar
            </p>
            
            {/* Main Title */}
            <h1 className={`text-[#FAFAFA] text-5xl font-normal mb-3 whitespace-nowrap hero-title ${heroElements[0] ? 'animate' : ''}`}>
              AI-Ready Salesforce
            </h1>
            
            {/* Sub-headline */}
            <div className={`mb-8 hero-title ${heroElements[0] ? 'animate' : ''}`}>
              <h2 className="text-[#FAFAFA] text-3xl font-normal">
                Transform Your Delivery Speed
              </h2>
            </div>
            
            {/* Date and Time */}
            <div className={`flex items-center space-x-4 mb-10 hero-date ${heroElements[1] ? 'animate' : ''}`}>
              <img src={calendarIcon} alt="Calendar" className="w-6 h-6" />
              <span className="text-[#FAFAFA] text-xl">13 August, 2:00 PM SGT (45 min)</span>
            </div>
            
            {/* Speakers Section */}
            <div className={`flex space-x-10 hero-speakers ${heroElements[2] ? 'animate' : ''}`}>
              {/* Speaker 1 - Heather */}
              <div className="flex flex-col items-start w-40">
                <div className="relative mb-3">
                  <img src={speaker3} alt="Heather Mao" className="w-[84px] h-[84px] rounded-full" />
                  {/* Cloud Icon */}
                  <img 
                    src={cloudIcon} 
                    alt="Cloud" 
                    className="absolute -bottom-2 -left-2 w-8 h-6 z-10" 
                  />
                </div>
                <p className="text-white text-xl font-semibold mt-1  mb-1">Heather Mao</p>
                <p className="text-white text-xs opacity-80 mb-0">Strategic Account</p>
                <p className="text-white text-xs opacity-80 mb-0">Director - Agentforce</p>
                <p className="text-white text-xs opacity-80">Salesforce</p>
              </div>
              
              {/* Speaker 2 - Sidu */}
              <div className="flex flex-col items-start w-40">
                <div className="relative mb-3">
                  <img src={speaker1} alt="Sidu Ponnapa" className="w-[84px] h-[84px] rounded-full" />
                  {/* Vector Icon */}
                  <img 
                    src={vectorIcon} 
                    alt="Vector" 
                    className="absolute -bottom-2 -left-2 w-8 h-4 z-10" 
                  />
                </div>
                <p className="text-white text-xl font-semibold mt-1 mb-1">Sidu Ponnapa</p>
                <p className="text-white text-xs opacity-80 mb-0">CEO & Co-founder</p>
                <p className="text-white text-xs opacity-80">realfast</p>
              </div>
              
              {/* Speaker 3 - Aakash */}
              <div className="flex flex-col items-start w-40">
                <div className="relative mb-3">
                  <img src={speaker2} alt="Aakash Dharmadhikari" className="w-[84px] h-[84px] rounded-full" />
                  {/* Vector Icon */}
                  <img 
                    src={vectorIcon} 
                    alt="Vector" 
                    className="absolute -bottom-2 -left-2 w-8 h-4 z-10" 
                  />
                </div>
                <p className="text-white text-xl font-semibold mt-1 mb-1">Aakash Dharmadhikari</p>
                <p className="text-white text-xs opacity-80">Co-Founder, realfast</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Registration Form */}
        <div className={`flex-1 flex items-start justify-start pr-40 pt-36 hero-form ${heroElements[3] ? 'animate' : ''}`}>
          <div className="w-full max-w-lg">
            {/* Salesforce Logo - Above the card */}
            <div className="flex justify-center mb-8">
              <img src={salesforceLogo} alt="Salesforce" className="h-16 w-auto" />
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl opacity-32 p-[0.5px]">
                <div className="w-full h-full bg-black/40 rounded-2xl"></div>
              </div>
              <div className="relative z-10 p-8">
                <form className="space-y-4">
                  {/* Full Name Field */}
                  <div>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Full Name"
                      className="w-full mt-2 px-5 py-2 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email ID"
                      className="w-full mb-4 px-4 py-2 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>
                  
                  {/* Register Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#1D4ED8] hover:bg-blue-800 text-white font-medium py-4 px-6 rounded-xl text-sm"
                  >
                    Register Now
                  </button>
                </form>
                
                {/* Disclaimer */}
                <p className="text-gray-300 text-xs text-center mt-6 leading-relaxed">
                  This webinar is co-presented with Salesforce and limited to 100 senior technical and business <br/>leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Webinar Agenda Section */}
      <div ref={agendaRef} className={`relative py-20 px-48 agenda-container ${agendaVisible ? 'animate' : ''}`}>
        <div className="max-w-7xl mx-auto text-white">
          {/* 2x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Grid Item 1 - Webinar Agenda Title */}
            <div className="p-6 md:p-8 border-b border-r border-gray-700/40 corner-bottom-right">
              <div className="h-full flex flex-col justify-center">
                <p className="text-sm text-gray-400 font-normal mb-3">Webinar Agenda</p>
                <h2 className="text-xl md:text-2xl font-medium leading-snug text-white/64">
                  Why traditional IT delivery models are failing in the AI era
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
      <div ref={transformRef} className={`relative py-20 transform-container ${transformVisible ? 'animate' : ''}`}>
        <div className="relative z-10 h-80 flex items-center justify-center px-48">
          <div className="text-center text-white mt-10 max-w-4xl">
            {/* Introducing EXO */}
            <p className={`text-lg text-gray-300 font-normal mb-6 transform-intro ${transformVisible ? 'animate' : ''}`}>
              Introducing EXO
            </p>
            
            {/* Main Headline */}
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight transform-headline ${transformVisible ? 'animate' : ''}`}>
              Transform never-ending<br />
              roadmaps into week-long wins
            </h2>
            
            {/* Sub-headline */}
            <p className={`text-xl md:text-xl text-gray-300 font-normal leading-relaxed transform-sub ${transformVisible ? 'animate' : ''}`}>
              EXO bridges the gap between AI-speed demands<br />
              and legacy delivery processes.
            </p>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div ref={problemRef} className={`relative pt-44 pb-20 px-48 problem-container ${problemVisible ? 'animate' : ''}`}>
        <div className="max-w-6xl mx-auto text-white">
          {/* Section Title */}
          <div className="text-left mb-20">
            <h2 className={`text-lg font-normal text-[#BFDBFE] ml-24 mb-4 problem-title ${problemVisible ? 'animate' : ''}`}>The Problem</h2>
            <h1 className={`text-3xl md:text-3xl ml-24 font-normal leading-tight problem-headline ${problemVisible ? 'animate' : ''}`}>
              Leadership Expects AI Results. Teams Deliver at Legacy Speed.
            </h1>
          </div>
          
          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-items-start">
            {problemItems.map((item, index) => (
              <div 
                key={index}
                className={`${item.margin} text-left max-w-[240px]`}
              >
                <div className="flex justify-start mb-6">
                  <div className="w-28 h-0.5 bg-gradient-to-r from-[#362CFF] via-[#BFDBFE] to-[#92A7FF]"></div>
                </div>
                <h3 className="text-xl md:text-xl font-normal mb-8 text-left">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-base font-normal leading-relaxed text-left">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div ref={benefitsRef} className={`text-white w-full min-h-screen flex justify-center items-center pt-16 benefit-container ${benefitsVisible ? 'animate' : ''}`}>
        {/* Container */}
        <div className='w-full flex flex-col gap-16 max-w-6xl lg:flex-row' style={{ paddingLeft: '8rem', paddingRight: '8rem' }}>
          {/* Left side */}
          <div className={`flex flex-col gap-3 max-w-md benefit-left ${benefitsVisible ? 'animate' : ''}`}>
            <div className='text-[rgba(191,219,254,1)] font-medium text-lg py-2'>The Benefits</div>
            <div className='text-white font-normal text-4xl md:text-4xl lg:text-4xl leading-tight'>
              Stop SalesForce <br /> Delivery Blocking AI
            </div>
          </div>

          {/* Right side */}
          <div className={`flex flex-col gap-12 flex-1 benefit-right ${benefitsVisible ? 'animate' : ''}`}>
            {/* Deliver Ahead of Schedule */}
            <div className={`flex items-start gap-6 benefit-item ${benefitItems[0] ? 'animate' : ''}`}>
              <div className="flex-shrink-0 benefit-icon">
                <img
                  src={appointmentIcon}
                  alt="Appointment Icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className="text-xl font-normal">Deliver Ahead of Schedule</h3>
                <p className="text-base font-normal text-gray-300">Transform 3-week development cycles into 1-day sprints.</p>
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
                <p className="text-base font-normal text-gray-300">Demonstrate measurable AI returns to executives by freeing teams from routine work.</p>
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
                <p className="text-base font-normal text-gray-300">Every change tracked, every decision documented for complete visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <section className="w-full min-h-screen text-white py-16">
        <div ref={caseStudiesRef} className={`w-full flex flex-col items-center case-studies-container ${caseStudiesVisible ? 'animate' : ''}`} style={{ paddingLeft: '13rem', paddingRight: '11rem' }}>
        {/* Heading */}
        <h1 className={`font-normal text-4xl mb-16 py-7 case-study-title ${caseStudiesVisible ? 'animate' : ''}`}>
          Case Studies
        </h1>

        {/* Case Study Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 max-w-6xl w-full items-start">
          {companyData.map((data, index) => (
            <div
              key={index}
              className={`flex flex-col h-full case-study-item ${caseStudyItems[index] ? 'animate' : ''}`}
              style={{ display: 'grid', gridTemplateRows: 'auto auto 1fr 1fr auto', gap: '1.5rem' }}
            >
              {/* Company Name */}
              <h2 className="text-lg font-light">{data.company}</h2>

              {/* Challenge */}
              <div>
                <p className="text-[#BFDBFE] font-normal text-base mb-1">Challenge</p>
                <p className="text-gray-400 font-normal text-xl">{data.challenge}</p>
              </div>

              {/* Scope */}
              <div>
                <p className="text-[#BFDBFE] mb-1 font-normal text-base">Scope</p>
                <div className="text-gray-400 font-normal text-xl">
                  <div>{data.scope}</div>
                </div>
              </div>

                          {/* Results */}
            <div className="relative">
              <p className="text-blue-400 mb-1 font-normal text-base">Results</p>
              <div className="relative">
                <p className="font-semibold tracking-tighter text-3xl max-w-sm">{data.results}</p>
                {/* Vector underline - different styling for each case study */}
                <img 
                  src={index === 0 ? vector10Icon : vector11Icon} 
                  alt="Results underline" 
                  className={`absolute mt-2 bottom-0 w-auto h-auto z-10 ${
                    index === 0 
                      ? 'left-44' // Left case study positioning
                      : 'left-52' // Right case study positioning
                  }`}
                  style={{ 
                    transform: 'translateY(10px)',
                    maxWidth: index === 0 ? '90px' : '80px' // Different sizes
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
      <footer ref={footerRef} className={`w-full h-[400px] relative footer-container ${footerVisible ? 'animate' : ''}`}>
        <div className='py-[110px] flex flex-col lg:flex-row justify-center items-start px-8 lg:gap-[18rem] gap-4'>
          <div className={`text-white text-5xl font-normal footer-left ${footerElements[0] ? 'animate' : ''}`}>
            Transform <br /> Roadmaps into Wins
          </div>

          <div className={`footer-right ${footerElements[1] ? 'animate' : ''}`}>
            <button className='bg-gray-900/50 py-4 px-9 rounded-xl border border-gray-100/20 text-sm text-white footer-button'>
              Start Your Free EXO Pilot Sprint
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default HeroTransformSection;
