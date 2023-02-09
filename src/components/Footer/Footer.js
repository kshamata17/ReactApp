import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'
import { FaBed, FaBraille,FaLightbulb } from "react-icons/fa";
import {SiMaterialdesign} from "react-icons/si";
import {BsArrowRight} from "react-icons/bs"

const Footer = () => {
  return (
    <>
    <div className='services__container'>
        <div className='service'>
            <div className='image'> 
                <FaBed size='2x' color="rgb(192, 103, 44)" />
            </div>
            <div className='text'><p>Furniture</p>
            <NavLink to="/services" className='services'>Details <BsArrowRight className='arrow'/></NavLink>

            </div>
        </div>
        <div className='service'>
            <div className='image'> 
                <FaBraille size='2x' color="rgb(192, 103, 44)" />
            </div>
            <div className='text'><p>Decoration</p>
                <NavLink to="/services" className='services'>Details <BsArrowRight className='arrow'/></NavLink>
            </div>
        </div>
        <div className='service'>
            <div className='image'> 
                <FaLightbulb size='2x' color="rgb(192, 103, 44)" />  
            </div>
            <div className='text'><p>Lighting</p>
                <NavLink to="/services" className='services'>Details <BsArrowRight className='arrow'/></NavLink>
            </div>
        </div>
        <div className='service' id='last'>
            <div className='image'> 
                <SiMaterialdesign size='2x' color="rgb(192, 103, 44)" />
            </div>
            <div className='text'><p>Designing</p>
                <NavLink to="/services" className='services'>Details <BsArrowRight className='arrow'/></NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
