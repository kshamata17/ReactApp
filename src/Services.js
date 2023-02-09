import React from 'react'
import HeroSection from './components/HeroSection/HeroSection.js'
// import Home from './Home'

const Services = () => {

  const data = {
    name: "Our Services",
    image: "../images/bg2.jpg",
  };
  return (
    <>
      <HeroSection  {...data}/>
    </>
  )
}

export default Services
