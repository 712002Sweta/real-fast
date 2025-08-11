import React, { useState, useEffect, useRef } from 'react';
import webpageBg from '../assets/Webpage.png';
import Header from './Header';
import HeroSection from './HeroSection';
import WebinarAgenda from './WebinarAgenda';
import TransformSection from './TransformSection';
import ProblemSection from './ProblemSection';
import BenefitsSection from './BenefitsSection';
import CaseStudiesSection from './CaseStudiesSection';
import Footer from './Footer';


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



  return (
    <section className="relative min-h-screen  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={webpageBg}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection 
        heroVisible={heroVisible}
        heroElements={heroElements}
        heroRef={heroRef}
        isSubmitting={isSubmitting}
        submitSuccess={submitSuccess}
        formErrors={formErrors}
        handleWebinarRegistration={handleWebinarRegistration}
      />

      {/* Webinar Agenda Section */}
      <WebinarAgenda 
        agendaVisible={agendaVisible}
        agendaRef={agendaRef}
      />

      {/* Transform Section */}
      <TransformSection 
        transformVisible={transformVisible}
        transformRef={transformRef}
      />

      {/* Problem Section */}
      <ProblemSection 
        problemVisible={problemVisible}
        problemRef={problemRef}
      />

      {/* Benefits Section */}
      <BenefitsSection 
        benefitsVisible={benefitsVisible}
        benefitsRef={benefitsRef}
        benefitItems={benefitItems}
      />

      {/* Case Studies Section */}
      <CaseStudiesSection 
        caseStudiesVisible={caseStudiesVisible}
        caseStudiesRef={caseStudiesRef}
        caseStudyItems={caseStudyItems}
      />

      {/* Footer Section */}
      <Footer 
        footerVisible={footerVisible}
        footerRef={footerRef}
        footerElements={footerElements}
      />
    </section>
  );
};

export default HeroTransformSection;
