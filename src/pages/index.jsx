import React from 'react';

import Navbar from '../components/Navbar';

import HeroSection from '../components/HeroSection';
import ResultsSection from '../components/ResultsSection';

function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />
      <ResultsSection />
    </>
  );
};

export default Home;
