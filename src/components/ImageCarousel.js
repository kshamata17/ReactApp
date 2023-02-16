import React from 'react';
import '../components/ImageCarousel.scss';
import '../components/MyCard.js';
import MyCard from '../components/MyCard.js';
import {BsArrowLeftSquare, BsArrowRightSquare} from 'react-icons/bs';

const ImageCarousel = () => {
    let box = document.querySelector('.testimonials');


    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        
     }
    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;

    }
  return (
    <div className='testimonials__cont'>
        <div className='test'>
            <button className='pre__btn' onClick={btnpressprev} ><p><BsArrowLeftSquare/></p></button>

            <div className='testimonials'>
                <MyCard cardno='1'/>
                <MyCard cardno='2'/>
                <MyCard cardno='3'/>
                <MyCard cardno='4'/>
                <MyCard cardno='5'/>
            </div>
            <button className='next__btn' onClick={btnpressnext}><p><BsArrowRightSquare/></p></button>
        </div>

    </div>
  )
}

export default ImageCarousel
