import React from 'react'
import Carousel_gallery from './components/Carousel/Carousel_gallery';
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
    <div className='products__gallery'>
        <Carousel_gallery />
        {/* <div className='product__items'>
            <div className='product__item'>
                <div className='image'>
                    <img src='./images/dining2.jpg'/>
                </div>
                <div className='content'>
                    <h3>Coffee Table and Chair</h3>
                    <h4>Price - Rs0000</h4>
                    <p>Lorem ipsum dolor sit amet</p>
                    <button>Add to cart</button>
                </div>
            </div>
        </div> */}
    </div>
      
    </>
  )
}

export default Products_gallery
