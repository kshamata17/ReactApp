import React from 'react';
import '../HeroSection/HeroSection.scss';
import { NavLink } from 'react-router-dom';

const HeroSection = ({name, image}) => {
  return (
    <>
        <section className='main__section'>
            <img src={image} alt='background' />
            <div className='content'>
                <h1>{name}</h1>
                <NavLink to = '/' >
                  <button className=''>Discover</button>
                </NavLink>
                
                <p>10% off for all products</p>
            </div>
        </section>
  </>
  )
}

export default HeroSection
