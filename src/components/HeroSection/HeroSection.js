import React from 'react';
import '../HeroSection/HeroSection.scss';
import { NavLink } from 'react-router-dom';
import Welcome from '../Welcome';

const HeroSection = ({name, image}) => {
  return (
    <>
        <section className='main__section'>
            <img src={image} alt='background' />
            <div className='content'>
                <h1>{name}</h1>
                <NavLink to = '/productsGallery' >
                  <button className=''>Discover</button>
                </NavLink>
                
                <p>Design your home with passion</p>
            </div>
        </section>
  </>
  )
}

export default HeroSection
