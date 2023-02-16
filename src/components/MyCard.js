import React from 'react';
import './MyCard.scss';
import {VscQuote} from 'react-icons/vsc';

const MyCard = (props) => {
  return (
    <div className='mycard'>
      <p><VscQuote/><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</em> </p>
      <div className='person__info'>
        <div className='person__info'><img src='./images/profile.webp'/></div>
        <div className='person__details'>Lorem ipsum dolor</div>
      </div>
    </div>
  )
}

export default MyCard
