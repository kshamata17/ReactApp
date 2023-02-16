import React from 'react';
import '../components/Projects.scss';
import {BsArrowRight} from 'react-icons/bs';

const Projects = () => {
  return (
    <>
    <div className='container'>
        <h1>Our Projects</h1>
        <div className='cards'>
            <div className='cards__cont'>
                <div className='cont'>
                    <img src='./images/img6.jpg' alt='image'/>
                    <h2>Project</h2>
                    <div className='overlay'>
                        <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <div><h3>See Project</h3><BsArrowRight className='arrow'/></div>
                        </div>
                    </div>
                </div>
                <div className='cont'>
                    <img src='./images/img5.jpg' alt='image'/>
                    <h2>Project</h2>
                    <div className='overlay'>
                        <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <div><h3>See Project</h3><BsArrowRight className='arrow'/></div>
                        </div>
                    </div>
                </div>
                <div className='cont'>
                    <img src='./images/img4.jpg' alt='image'/>
                    <h2>Project</h2>
                    <div className='overlay'>
                        <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <div><h3>See Project</h3><BsArrowRight className='arrow'/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Projects
