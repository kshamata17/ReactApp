import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import './Payment.scss';

const Payment = () => {
    const data = {
        name: "Products on Sale",
        image: "./images/bg7.jpg",
      };
  return (
    <>
      <HeroSection {...data}/>
      <div className='payment__wrapper'>
        <div className='payment__cod'>
            {/* place order for cash on delivery */}
            Place Order
        </div>
        <div className='payment__card'>
            {/* Paywith card */}
        </div>
      </div>
    </>
  )
}

export default Payment

