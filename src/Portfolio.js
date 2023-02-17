import React from 'react'
import HeroSection from './components/HeroSection/HeroSection.js'


const Portfolio = () => {
  const data = {
    name: "Our Portfolio",
    image: "./images/bg7.jpg",
  };
  return (
    <>
      <HeroSection  {...data}/>
    </>
  )
}

export default Portfolio
