import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo-container">
                <img src="\images\IMG_0523.jpg" alt="Logo" className="header-logo-img" />
                <h1 className="header-logo">LOGO</h1>
            </div>
            <nav className="header-nav">
                <ul>
                    <li><a href="#shop">SHOP</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#stories">STORIES</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#contact">CONTACT US</a></li>
                </ul>
            </nav>
            <div className="header-icons">
                <a href="#search"><i className="fas fa-search"></i></a>
                <a href="#favorites"><i className="fas fa-heart"></i></a>
                <a href="#cart"><i className="fas fa-shopping-bag"></i></a>
                <a href="#profile"><i className="fas fa-user"></i></a>
                <a href="#language"><span>ENG</span></a>
            </div>
        </header>
    );
}

export default Header;
