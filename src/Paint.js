import React from 'react';
import HeroSection from './components/HeroSection/HeroSection.js';
import './Paint.scss';
import {BiHeartCircle} from 'react-icons/bi';

const Paint = () => {
    const data = {
        name: "Solutions for every corner",
        image: "./images/bg7.jpg",
      }
  return (
    <>
     <HeroSection {...data}/>
     <div className='color__wrapper'>
        <h2>Choose your color</h2>
        <div className='color__gallery'>
            <div className='color__card'>
                {/* {this.props.color} */}
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
            <div className='color__card'>
                <BiHeartCircle className='heart__icon'/>
                <h3>Color Name</h3>
            </div>
        </div>
     </div>
    </>
  )
}

export default Paint
