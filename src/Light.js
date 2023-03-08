import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import { NavLink } from 'react-router-dom'

const Light = () => {
    const data = {
        name: "Solutions for every corner",
        image: "./images/bg7.jpg",
      }
  return (
    <>
      <HeroSection {...data}/>
      <div className='services__cont'>
        <div className='group'>
          <div className='card'>
            <div className='image'>
              <img src='./images/light1.jpg'/>
            </div>
            <div className='content'>
              <h3>Light Type1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/light'><button className='btn_service'>read more</button></NavLink>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/light2.jpg'/>
            </div>
            <div className='content'>
              <h3>Light Type2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service2'><button className='btn_service'>read more</button></NavLink>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/light5.jpg'/>
            </div>
            <div className='content'>
              <h3>Light Type3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service3'><button className='btn_service'>read more</button></NavLink>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/light4.jpg'/>
            </div>
            <div className='content'>
              <h3>Light Type4</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service4'><button className='btn_service'>read more</button></NavLink>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/light5.jpg'/>
            </div>
            <div className='content'>
              <h3>Light Type5</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service5'><button className='btn_service'>read more</button></NavLink>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/light6.jpg'/>
            </div>
            <div className='content'>
              <h3>Light Type6</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service6'><button className='btn_service'>read more</button></NavLink>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/light7.jpg'/>
            </div>
            <div className='content'>
              <h3>Light Type7</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service7'><button className='btn_service'>read more</button></NavLink>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/light8.jpg'/>
            </div>
            <div className='content'>
              <h3>Light Type8</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service8'><button className='btn_service'>read more</button></NavLink>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/light9.jpg'/>
            </div>
            <div className='content'>
              <h3>Light Type9</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <NavLink to = '/service9'><button className='btn_service'>read more</button></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Light
