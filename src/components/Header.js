import { NavLink } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <header>
        <a href='#'>Om Traders & Glass House</a>
        <nav>
            <ul className='nav__menu'>
                <li className='nav__item'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to="/contact">Pages</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to="/contact">Portfolio</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to="/contact">Blog</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to="/contact">Shop</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to="/contact">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
