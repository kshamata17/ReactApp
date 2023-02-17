import React from 'react'
import HeroSection from './components/HeroSection/HeroSection.js'


const Blog = () => {
  const data = {
    name: "Blog",
    image: "./images/bg7.jpg",
  };
  return (
    <>
      <HeroSection  {...data}/>
    </>
  )
}

export default Blog
