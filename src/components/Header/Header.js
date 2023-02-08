import { NavLink } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import './Header.scss'
import {FiMenu} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'

const Header = () => {

    const [click, setClicked] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const handleClick = () => {
        setClicked(!click);
    };

    const handleCloseMobileMenu = () => {
        setShowNav(false);
    };

    useEffect(() => {
        document.addEventListener('scroll', () => {

            if(window.scrollY > 100 ? setShowNav(true) : setClicked(false)){
                setShowNav(true); 
            } else {
                setShowNav(false);
            }
        });
    }, [])

  return (
    <header>
        <a href='#' className='logo'>Om Traders & Glass House</a>
        <nav className={showNav ? 'navbar__container' : 'navbar__container active'}>
            <div className='menu__icon' onClick={handleClick}>{click ? <GrClose />: <FiMenu />}
            </div>
            <ul className={ click ? 'nav__menu active' : 'nav__menu'}>
                <li className='nav__item' onClick={handleCloseMobileMenu} >
                    <NavLink to="/" className='menu'>Home</NavLink>
                </li>
                <li className='nav__item' onClick={handleCloseMobileMenu} >
                    <NavLink to="/services" className='menu'>Services</NavLink>
                </li>
                <li className='nav__item' onClick={handleCloseMobileMenu} >
                    <NavLink to="/about" className='menu'>About</NavLink>
                </li>
                <li className='nav__item' onClick={handleCloseMobileMenu} >
                    <NavLink to="/portfolio" className='menu'>Portfolio</NavLink>
                </li>
                <li className='nav__item' onClick={handleCloseMobileMenu} >
                    <NavLink to="/blog" className='menu'>Blog</NavLink>
                </li>
                <li className='nav__item' onClick={handleCloseMobileMenu} >
                    <NavLink to="/contact" className='menu'>Contact Us</NavLink>
                </li>
                <li className='nav__item' onClick={handleCloseMobileMenu} >
                    <div className='search'>
                        <AiOutlineSearch className='search__icon'/>
                        <button className='search__btn'>Search</button>
                    </div>
                    {/* <NavLink to="/shop" className='menu'>Search</NavLink> */}
                </li>
                <li className='nav__item' onClick={handleCloseMobileMenu} >
                <AiOutlineShoppingCart  className='cart'/>
                    {/* <NavLink to="/cart" className='menu'>Cart Logo</NavLink> */}
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
