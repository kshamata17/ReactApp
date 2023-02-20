import React from 'react'
import Bedroom from '../images/bedroom1.jpg'
import Dining from '../images/dining3.jpg'
import Bathroom from '../images/bathroom4.jpg'
import '../components/Products.scss'
import { GrLinkNext } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'

const Products = () => {
  return (
    <div className='products'>
        <h1>featured products</h1>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p> */}

        <div className='first__prdt'>
            <div className='prdt__text'>
                <NavLink to="/services" className="nav">
                    <h2>Bedroom Items <div>< GrLinkNext /></div></h2>
                </NavLink>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className='image'>
                <img alt='img' src={Bedroom}/>
            </div>
        </div>
        <div className='first__prdt'>
            <div className='image'>
                <img alt='img' src={Dining}/>
            </div>
            <div className='prdt__text'>
            <NavLink to="/services" className="nav">
                <h2>Kitchen Items <div>< GrLinkNext /></div></h2>
            </NavLink>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            </div>
        </div>
        <div className='first__prdt'>
            <div className='prdt__text'>
            <NavLink to="/services" className="nav">
                <h2>Bathroom Items <div>< GrLinkNext /></div></h2>
            </NavLink> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            </div>
            <div className='image'>
                <img alt='img' src={Bathroom}/>
                {/* <div><img alt='img' src={Bedroom2}/></div> */}
            </div>
        </div>
             
    </div>
  )
}

export default Products
