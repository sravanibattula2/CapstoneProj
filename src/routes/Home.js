import React from 'react';
import HeaderElement from '../components/HeaderElement';
import HeroSection from '../components/HeroSection';
import Specials from '../components/Specials';
import Footer from '../components/Footer';
import Description from '../components/Description';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <HeaderElement />
      <HeroSection />
      <Specials />
      <Testimonials />
      <Description />
      <Footer />
    </>
  )
}

export default Home
