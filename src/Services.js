import React from 'react'
import { NavLink } from 'react-router-dom';
import Footer from './components/Footer/Footer.js';
import HeroSection from './components/HeroSection/HeroSection.js'
import './Services.scss'
const Services = () => {
  const data = {
    name: "Our Services",
    image: "./images/bg7.jpg",
  };
  return (
    <>
      <HeroSection  {...data}/>
      <div className='services__cont'>
        <h2>Our Services</h2>
        <div className='group' >
          <div className='card'  >
            <div className='image'>
              <img src='./images/house.jpg'/>
            </div>
            <div className='content'>
              <h3>House Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service1'><button className='btn_service'>read more</button></NavLink>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/kitchen.jpg'/>
            </div>
            <div className='content'>
              <h3>Kitchen Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service2'><button className='btn_service'>read more</button></NavLink>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/living.jpg'/>
            </div>
            <div className='content'>
              <h3>Living Room Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service3'><button className='btn_service'>read more</button></NavLink>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/bedroom.jpg'/>
            </div>
            <div className='content'>
              <h3>Bedroom Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service4'><button className='btn_service'>read more</button></NavLink>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/bathroom.jpg'/>
            </div>
            <div className='content'>
              <h3>Bathroom Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service5'><button className='btn_service'>read more</button></NavLink>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/cafe.jpg'/>
            </div>
            <div className='content'>
              <h3>Cafe Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service6'><button className='btn_service'>read more</button></NavLink>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/office.jpg'/>
            </div>
            <div className='content'>
              <h3>Office Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service7'><button className='btn_service'>read more</button></NavLink>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/commercial.jpg'/>
            </div>
            <div className='content'>
              <h3>Commercial Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service8'><button className='btn_service'>read more</button></NavLink>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/livingroom3.jpg'/>
            </div>
            <div className='content'>
              <h3>Interior Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service9'><button className='btn_service'>read more</button></NavLink>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Services
