import React from 'react';
import './App.css';
import HeroTransformSection from './components/HeroTransformSection';

function App() {
  return (
    <div className="App">
      {/* Animated Background Glow Elements */}
      <div className="glow-container">
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
