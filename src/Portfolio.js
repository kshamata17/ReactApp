import React from 'react'
import HeroSection from './components/HeroSection/HeroSection.js'
import Portfolio_comp from './components/Portfolio/Portfolio_comp.js';
import './Portfolio.scss'

const Portfolio = () => {
  const data = {
    name: "Our Portfolio",
    image: "./images/bg7.jpg",
  };
  return (
    <>
      <HeroSection  {...data}/>
      <h2>Our Portfolio</h2>
      <Portfolio_comp />
      <div className='port__cont'>
        <button className='port__text'>
          <p>Do you want to discuss your project?</p>
        </button>
      </div>
    </>
  )
}

export default Portfolio
