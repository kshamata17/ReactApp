import React from 'react';
import "../components/Welcome.scss";

const Welcome = () => {
  return (
    <>
      <div className='wrapper'>
        <div className='text'>        
            <h2>Welcome to Visionary Homes</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <picture>
            <div>
                <img src='./images/img1.jpg'/>
            </div>
            <div>
                <img src='./images/img3.jpg'/>
            </div>
        </picture>
      </div>
      
    </>
  )
}

export default Welcome
