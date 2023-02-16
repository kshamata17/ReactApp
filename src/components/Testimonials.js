import React from 'react';
import '../components/Testimonials.scss';
import ImageCarousel from './ImageCarousel';

const Testimonials = () => {
  return (
    <>
    <div className='test__container'>
        <h1>Testimonials</h1>
        <div>
            <ImageCarousel />
        </div>
    </div>
      
    </>
  )
}

export default Testimonials
