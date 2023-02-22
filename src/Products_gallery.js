import React from 'react'
import { NavLink } from 'react-router-dom';
// import Carousel_gallery from './components/Carousel/Carousel_gallery';
import HeroSection from './components/HeroSection/HeroSection'
import './Products_gallery.scss'

const Products_gallery = () => {
    const data = {
        name: "Products on Sale",
        image: "./images/bg7.jpg",
      };
  return (
    <>
    <HeroSection {...data}/>
    <div className='services__cont'>
        <div className='group'>
          <div className='card'>
            <div className='image'>
              <img src='./images/livingroom3.jpg'/>
            </div>
            <div className='content'>
              <div className='title__price'>
                <h3>Wooden Cupboard</h3>
                <h4>Price Rs0000</h4>
                <NavLink to='/payment'><button className='btn_service'>buy now</button></NavLink>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/item7.jpg'/>
            </div>
            <div className='content'>
                <div className='title__price'>
                    <h3>Coffee Table</h3>
                    <h4>Price Rs0000</h4>
                    <NavLink to='/payment'><button className='btn_service'>buy now</button></NavLink>
                </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/item4.jpg'/>
            </div>
            <div className='content'>
            <div className='title__price'>
                <h3>Small Wooden Cupboard</h3>
              <h4>Price Rs0000</h4>
              <NavLink to='/payment'><button className='btn_service'>buy now</button></NavLink>

            </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/item2.jpg'/>
            </div>
            <div className='content'>
            <div className='title__price'>
                <h3>King Size Bed</h3>
                <h4>Price Rs0000</h4>  
                <NavLink to='/payment'><button className='btn_service'>buy now</button></NavLink>

            </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/item5.jpg'/>
            </div>
            <div className='content'>
            <div className='title__price'>
                <h3>Blue Sofa</h3>
                <h4>Price Rs0000</h4>
                <NavLink to='/payment'><button className='btn_service'>buy now</button></NavLink>
            </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/item6.jpg'/>
            </div>
            <div className='content'>
            <div className='title__price'>
                <h3>Bathroom Vanity</h3>
                <h4>Price Rs0000</h4>
                <NavLink to='/payment'><button className='btn_service'>buy now</button></NavLink>

            </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className='card'>
            <div className='image'>
              <img src='./images/item3.jpg'/>
            </div>
            <div className='content'>
                <div className='title__price'>
                <h3>Large Sofa</h3>
                <h4>Price Rs0000</h4>
                <NavLink to='/payment'><button className='btn_service'>buy now</button></NavLink>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Products_gallery
