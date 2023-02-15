import React from 'react';
import HeroSection from './components/HeroSection/HeroSection.js';


const About = () => {
  const data = {
    name: "About Us",
    image: "../images/bg3.jpg",
  };
  return (
    <>
      <HeroSection  {...data}/>
    </>
  )
}

export default About
