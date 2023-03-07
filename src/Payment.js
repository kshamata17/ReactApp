import React from 'react';
import { NavLink } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import './Payment.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
    const data = {
        name: "Buy you product",
        image: "./images/bg7.jpg",
      };
      const diffToast = () => {
        toast("Payment Successful!",
        {position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",});
        
      }
  return (
    <>
      <HeroSection {...data}/>
      <div className='payment__wrapper'>
        <div className='payment__section'>
          <div className='payment__card'>
              {/* Paywith card */}
              <div className='card'>
                <h2>Enter your payment details</h2>
                <div className='card__box'>
                <form>
                  <input type='text' placeholder='Card Number' required />
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
        {/* <NavLink to='/productsGallery'> */}
          <button className='pay' onClick={diffToast}>Pay</button>
          {/* </NavLink> */}
      </div>
      <ToastContainer 
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </>
  )
}

export default Payment

