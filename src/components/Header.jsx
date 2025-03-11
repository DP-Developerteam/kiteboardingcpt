// Import styles and libraries
import './__components.scss';
import React, { useState } from 'react';
//Import images/icons
import Logo from '../assets/img/logo.webp';
import MenuIcon from '../assets/img/menu-icon.svg';
import MenuOpenIcon from '../assets/img/menu-open-icon.svg';



function Header() {
    //Menu variables and functions
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
    <header className='header'>
            <div className='logo' onClick={() => { closeMenu(); scrollToTop(); }}>
                <img className='img' src={Logo} alt='' />
            </div>
            <button className='buttonMenu' onClick={toggleMenu}>
                <img className='icon' src={isMenuOpen ? MenuOpenIcon : MenuIcon} alt='menu icon' />
            </button>

            <nav className={`navContainer ${isMenuOpen ? 'open' : 'closed'}`}>
                <p className='tab' onClick={() => { closeMenu(); scrollToTop(); }}>Homepage</p>
                <a className='tab' onClick={closeMenu} href='#team'>Team</a>
                <a className='tab' onClick={closeMenu} href='#lessons'>Lessons</a>
                <a className='tab' onClick={closeMenu} href='#prices'>Prices</a>
                <a className='tab' onClick={closeMenu} href='#rentals'>Rentals</a>
                <a className='tab' onClick={closeMenu} href='#contact'>Contact</a>
            </nav>

        </header>
    )
}

export default Header