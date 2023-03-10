import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'
import { FaBed, FaBraille,FaLightbulb } from "react-icons/fa";
import {SiMaterialdesign} from "react-icons/si";
import {BsArrowRight, BsFacebook, BsInstagram, BsLinkedin, BsYoutube, BsPinterest} from "react-icons/bs";
import {GoLocation} from "react-icons/go";
import {AiOutlineMail} from "react-icons/ai";
import {FiPhoneCall} from "react-icons/fi";

const  Footer = () => {
  return (
    <div className='footer__section' style={{border:"1px solid white"}}>
    {/* <h1 className='title'>Our Services</h1> */}
    <div className='services__container'>
        <div className='service'>
            <div className='image'> 
                <FaBed size='2x' color="white" />
            </div>
            <div className='text'><p>Furniture</p>
                <NavLink to="index element" className='services'>Details <BsArrowRight className='arrow'/></NavLink>
            </div>
        </div>
        <div className='service'>
            <div className='image'> 
                <FaBraille size='2x' color="white" />
            </div>
            <div className='text'><p>Decoration</p>
                <NavLink to="/paint" className='services'>Details <BsArrowRight className='arrow'/></NavLink>
            </div>
        </div>
        <div className='service'>
            <div className='image'> 
                <FaLightbulb size='2x' color="white" />  
            </div>
            <div className='text'><p>Lighting</p>
                <NavLink to="/light" className='services'>Details <BsArrowRight className='arrow'/></NavLink>
            </div>
        </div>
        <div className='service' id='last'>
            <div className='image'> 
                <SiMaterialdesign size='2x' color="white" />
            </div>
            <div className='text'><p>Designing</p>
                <NavLink to="/services" className='services'>Details <BsArrowRight className='arrow'/></NavLink>
            </div>
        </div>
    </div>
    <footer>
        <div className='main__footer'>
            <div className='col' id='exp'>
                <h3 id='footer__title'>Visionary Homes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                </p>
            </div>
            <ul className='col'><h3>Company</h3>
                <NavLink to="/" className="nav"><li>Home</li></NavLink>
                <NavLink to="/services" className="nav"><li>Services</li></NavLink>
                <NavLink to="/about" className="nav"><li>About</li></NavLink>
                <NavLink to="/portfolio" className="nav"><li>Portfolio</li></NavLink>
                <NavLink to="/blog" className="nav"><li>Blog</li></NavLink>
                <NavLink to="/privacy" className="nav"><li>Privacy Policy</li></NavLink>
            </ul>
            <ul className='col'><h3>Head Office</h3>
                <li>
                    <h3><GoLocation className='social__icons' />Location</h3>
                    <p>Chabahil, Kathmandu</p>
                </li>
                <li><h3><AiOutlineMail className='social__icons' />Email Us</h3>
                    <p>visionaryhomes@abc.com</p>
                </li>
                <li><h3><FiPhoneCall className='social__icons' />Call Us</h3>
                    <p>0123456789</p>
                </li>
            </ul>
        </div>
        <div className='social'><h3>Follow Us</h3>
            <div className='row'>< BsFacebook className='media'/></div>
            <div className='row'>< BsInstagram className='media'/></div>
            <div className='row'>< BsLinkedin className='media'/></div>
            <div className='row'>< BsYoutube className='media'/></div>
            <div className='row'>< BsPinterest className='media'/></div>
            
        </div>
        <div className='copy'>
            Copyright &copy; 2023- All Rights Reserved
        </div>
    </footer>
    </div>
  )
}

export default Footer
