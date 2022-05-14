import React from 'react';

import Navbar from '../components/Navbar';

import HeroSection from '../components/HeroSection';
import ResultsSection from '../components/ResultsSection';
import AboutUs from '../components/AboutUs';

function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />
      <ResultsSection />
      <AboutUs />
    </>
  );
};

export default Home;
