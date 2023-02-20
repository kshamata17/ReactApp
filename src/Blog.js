import React from 'react'
import HeroSection from './components/HeroSection/HeroSection.js';
import './Blog.scss';
import {BsArrowRight} from 'react-icons/bs';

const Blog = () => {
  const data = {
    name: "Blog",
    image: "./images/bg7.jpg",
  };
  return (
    <>
      <HeroSection  {...data}/>
      <div className='blog__wrapper'>
        <div className='blog__container'>
          <div className='blog'>
            <div className='blog__image'>
              <img src='./images/dining2.jpg'/>
            </div>
            <div className='blog__text'>
              <h4>20th February 2023</h4>
              <h3>Best design ideas</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <button>Read More <BsArrowRight className='arrow'/></button>
          </div>
          <div className='blog'>
            <div className='blog__image'>
              <img src='./images/mirror.jpg'/>
            </div>
            <div className='blog__text'>
              <h4>20th February 2023</h4>
              <h3>Best design ideas</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <button>Read More <BsArrowRight className='arrow'/></button>
          </div>
          <div className='blog'>
            <div className='blog__image'>
              <img src='./images/item.jpg'/>
            </div>
            <div className='blog__text'>
              <h4>20th February 2023</h4>
              <h3>Best design ideas</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <button>Read More <BsArrowRight className='arrow'/></button>
          </div>
          <div className='blog'>
            <div className='blog__image'>
              <img src='./images/bg2.jpg'/>
            </div>
            <div className='blog__text'>
              <h4>20th February 2023</h4>
              <h3>Best design ideas</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <button>Read More <BsArrowRight className='arrow'/></button>
          </div>
          <div className='blog'>
            <div className='blog__image'>
              <img src='./images/bg3.jpg'/>
            </div>
            <div className='blog__text'>
              <h4>20th February 2023</h4>
              <h3>Best design ideas</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <button>Read More <BsArrowRight className='arrow'/></button>
          </div>
          <div className='blog'>
            <div className='blog__image'>
              <img src='./images/bg6.jpg'/>
            </div>
            <div className='blog__text'>
              <h4>20th February 2023</h4>
              <h3>Best design ideas</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <button>Read More <BsArrowRight className='arrow'/></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
