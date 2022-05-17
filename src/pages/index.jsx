import React from 'react';

import Navbar from '../components/Navbar';

import HeroSection from '../components/HeroSection';
import ResultsSection from '../components/ResultsSection';
import AboutUs from '../components/AboutUs';
import ValuesCompany from '../components/ValuesCompany';

function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />
      <ResultsSection />
      <AboutUs />
      <ValuesCompany />
    </>
  );
};

export default Home;
