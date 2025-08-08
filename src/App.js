import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import TransformProblemSection from './components/TransformProblemSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TransformProblemSection />
    </div>
  );
}

export default App;
