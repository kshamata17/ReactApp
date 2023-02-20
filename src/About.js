import React from 'react';
import './About.scss';
import {BsFacebook, BsInstagram, BsLinkedin} from "react-icons/bs";
import HeroSection from './components/HeroSection/HeroSection.js';


const About = () => {
  const data = {
    name: "About Us",
    image: "./images/bg7.jpg",
  };
  return (
    <>
      <HeroSection  {...data}/>
      <div className='about__wrapper'>
        <h2>about us</h2>
        <div className='about__container'>
          <div className='image'>
            <img src='./images/about.jpg'/>
          </div>
          <div className='text'>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
      
      <div className='team__wrapper'>
          <h2>our team</h2>
          <div className='team__container'>
            <div className='team__cards'>
              <div className='team__card'>
                <div className='team__content'>
                  <img src='./images/profile.webp'/>
                  <div className='team__text'>
                    <div className='overlay__text'>
                      <h3>ABC XYZ</h3>
                      <h4>Post</h4>
                      <div className='team__social'>
                      <div className='row'>< BsFacebook className='media'/></div>
                        <div className='row'>< BsInstagram className='media'/></div>
                        <div className='row'>< BsLinkedin className='media'/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='team__card'>
                <div className='team__content'>
                  <img src='./images/profile.webp'/>
                  <div className='team__text'>
                    <div className='overlay__text'>
                      <h3>ABC XYZ</h3>
                      <h4>Post</h4>
                      <div className='team__social'>
                      <div className='row'>< BsFacebook className='media'/></div>
                        <div className='row'>< BsInstagram className='media'/></div>
                        <div className='row'>< BsLinkedin className='media'/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='team__card'>
                <div className='team__content'>
                  <img src='./images/profile.webp'/>
                  <div className='team__text'>
                    <div className='overlay__text'>
                      <h3>ABC XYZ</h3>
                      <h4>Post</h4>
                      <div className='team__social'>
                      <div className='row'>< BsFacebook className='media'/></div>
                        <div className='row'>< BsInstagram className='media'/></div>
                        <div className='row'>< BsLinkedin className='media'/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='team__card'>
                <div className='team__content'>
                  <img src='./images/profile.webp'/>
                  <div className='team__text'>
                    <div className='overlay__text'>
                      <h3>ABC XYZ</h3>
                      <h4>Post</h4>
                      <div className='team__social'>
                      <div className='row'>< BsFacebook className='media'/></div>
                        <div className='row'>< BsInstagram className='media'/></div>
                        <div className='row'>< BsLinkedin className='media'/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='team__card'>
                <div className='team__content'>
                  <img src='./images/profile.webp'/>
                  <div className='team__text'>
                    <div className='overlay__text'>
                      <h3>ABC XYZ</h3>
                      <h4>Post</h4>
                      <div className='team__social'>
                      <div className='row'>< BsFacebook className='media'/></div>
                        <div className='row'>< BsInstagram className='media'/></div>
                        <div className='row'>< BsLinkedin className='media'/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='team__card'>
                <div className='team__content'>
                  <img src='./images/profile.webp'/>
                  <div className='team__text'>
                    <div className='overlay__text'>
                      <h3>ABC XYZ</h3>
                      <h4>Post</h4>
                      <div className='team__social'>
                      <div className='row'>< BsFacebook className='media'/></div>
                        <div className='row'>< BsInstagram className='media'/></div>
                        <div className='row'>< BsLinkedin className='media'/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='team__card'>
                <div className='team__content'>
                  <img src='./images/profile.webp'/>
                  <div className='team__text'>
                    <div className='overlay__text'>
                      <h3>ABC XYZ</h3>
                      <h4>Post</h4>
                      <div className='team__social'>
                      <div className='row'>< BsFacebook className='media'/></div>
                        <div className='row'>< BsInstagram className='media'/></div>
                        <div className='row'>< BsLinkedin className='media'/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='team__card'>
                <div className='team__content'>
                  <img src='./images/profile.webp'/>
                  <div className='team__text'>
                    <div className='overlay__text'>
                      <h3>ABC XYZ</h3>
                      <h4>Post</h4>
                      <div className='team__social'>
                      <div className='row'>< BsFacebook className='media'/></div>
                        <div className='row'>< BsInstagram className='media'/></div>
                        <div className='row'>< BsLinkedin className='media'/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About
