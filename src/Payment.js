import React from 'react';
import { NavLink } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import './Payment.scss';

const Payment = () => {
    const data = {
        name: "Buy you product",
        image: "./images/bg7.jpg",
      };
  return (
    <>
      <HeroSection {...data}/>
      <div className='payment__wrapper'>
        <div className='payment__section'>
          {/* <div className='payment__cod'>
              place order for cash on delivery
              Cash on Delivery
          </div> */}
          <div className='payment__card'>
              {/* Paywith card */}
              <div className='card'>
                <h2>Enter your payment details</h2>
                <div className='card__box'>
                <form>
                  <input type='number' placeholder='Card Number' required />
                  <input type='date' placeholder='MM/YY CVC' required />
                </form>
                </div>
              </div>
              <div className='card'>
                <h2>Personal Information</h2>
                <div className='card__box'>
                <form>
                  <div>
                    <input type='name' placeholder='First Name' required />
                    <input type= 'text' placeholder='Last Name' required />
                  </div>
                  <input type='text' placeholder='Address' required />
                  <input type='email' placeholder='Email' required />
                  <input type='number' placeholder='Phone Number' required/>
                </form></div>
                </div>
            </div>
        </div>
        <NavLink to='/productsGallery'><button className='pay'>Pay</button></NavLink>
      </div>
    </>
  )
}

export default Payment

