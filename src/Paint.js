import React from 'react';
import HeroSection from './components/HeroSection/HeroSection.js';
import './Paint.scss';
import {BiHeartCircle} from 'react-icons/bi';
import {BsArrowRight} from 'react-icons/bs';

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
            <div className='color__card__wrapper'>
                <div className='color__card color1' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color2' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color3' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color4' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color5' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color6' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color7' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color8' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color9' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color10' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color11' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color12' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color13' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color14' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color15' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color16' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color17' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color18' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color19' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
            <div className='color__card__wrapper'>
                <div className='color__card color20' >
                    {/* {this.props.color} */}
                    <BiHeartCircle className='heart__icon'/>
                </div>
                <h3>Color Name</h3>
            </div>
        </div>
        <div className='btn__more'>
            <h3>MORE</h3>
            < BsArrowRight className='arrow__more'/>
        </div>
     </div>
    </>
  )
}

export default Paint
