import React from 'react';
import '../Gallery/Gallery.scss';
// import { NavLink } from 'react-router-dom';

const Gallery = ({picture, detail, title, image_detail, image1, imageTitle}) => {
  return (
    <>
        <div className='service__details__wrapper'>
            <div className='service__details__section'>
                <div className='details'>
                    <h2>{title}</h2>
                    <p>{detail}</p>
                </div>
                <div className='image__service'>
                    <img src={picture} alt='background' />
                </div>
                
                <div className='image__gallery'>
                    <h3>{imageTitle}</h3>
                    <div className='images_grp'>
                        <div className='image'>
                            <div className='image__cont'>
                                <img src={image1}/>
                            </div>
                            <div className='image__info'>
                                {image_detail}</div>
                        </div>
                        <div className='image'>
                            <div className='image__cont'>
                                <img src={image1}/>
                            </div>
                            <div className='image__info'>{image_detail}</div>
                        </div>
                        <div className='image'>
                            <div className='image__cont'>
                                <img src={image1}/>
                            </div>
                            <div className='image__info'>{image_detail}</div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Gallery
