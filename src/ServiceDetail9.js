import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import './ServiceDetail1.scss'
import Gallery from './components/Gallery/Gallery.js'

const ServiceDetail9 = () => {
    const data = {
        name: "Our Services",
        image: "./images/bg7.jpg",
        picture: "./images/livingroom3.jpg",
        title: "Interior Design",
        image1: "./images/mirror.jpg",
        imageTitle: "Related Images",
        image_detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      };
  return (
    <div>
        <HeroSection {...data}/>
        <Gallery {...data}/> 
    </div>
  )
}

export default ServiceDetail9
