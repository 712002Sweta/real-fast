import React, { useEffect, useState } from 'react';
import './App.css';
import HeroTransformSection from './components/HeroTransformSection';

function App() {
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate when to show glow elements (around Problem section)
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show glow elements when user scrolls past hero section (approximately 2 viewport heights)
      if (scrollPosition > windowHeight * 1.5) {
        setShowGlow(true);
      } else {
        setShowGlow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Animated Background Glow Elements */}
      <div className={`glow-container ${showGlow ? 'show' : ''}`}>
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
        <div className="glow-orb glow-orb-4"></div>
      </div>
      
      <HeroTransformSection />
    </div>
  );
}

export default App;
