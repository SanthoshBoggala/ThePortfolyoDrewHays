// Header.js
import React, { useState } from 'react';
import './header.css';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <header className={`header ${isActive ? 'active' : ''}`} data-header>
            <div className="container">

                <a href="#" className="logo">
                    <img src="./Images/logo.svg" width="84" height="26" alt="logo" />
                </a>

                {!isActive && (
                    <div className='navbar-top-div'>
                        <ul className="navbar-top-list">

                            <li>
                                <a href="#home" className="navbar-link" data-nav-link>Home</a>
                            </li>

                            <li>
                                <a href="#service" className="navbar-link" data-nav-link>Services</a>
                            </li>

                            <li>
                                <a href="#about" className="navbar-link" data-nav-link>About</a>
                            </li>

                            <li>
                                <a href="#project" className="navbar-link" data-nav-link>Project</a>
                            </li>

                            <li>
                                <a href="#review" className="navbar-link" data-nav-link>Review</a>
                            </li>

                            <li>
                                <a href="#contact" className="navbar-link" data-nav-link>Contact</a>
                            </li>
                            <li>
                                <a className="Togglebtn">
                                    <span className="span">Get A Quote ➜</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                )}

                <div className='navToggle'>
                    <button className="nav-open-btn" aria-label="open menu" onClick={toggleNavbar}>
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                    </button>
                </div>

                <nav className={`navbar ${isActive ? 'active' : ''}`} data-navbar>
                    <div className="row navbarSideBarTop">
                        <div className='col-10'>
                            <a href="#" onClick={toggleNavbar} className="logo">
                                <img src="./Images/logo.svg" width="84" height="26" alt="logo" />
                            </a>
                        </div>

                        <div className='col-2 mb-5'>
                            <button className="nav-open-btn sideBarBtn" aria-label="open menu" onClick={toggleNavbar}>
                                <span className="line line-1"></span>
                                <span className="line line-2"></span>
                            </button>
                        </div>
                        <hr />
                    </div>

                    <div className='navList'>
                        <ul className="navbar-list">

                            <li>
                                <a onClick={toggleNavbar} href="#home" className="navbar-link" data-nav-link>Home</a>
                            </li>

                            <li>
                                <a onClick={toggleNavbar} href="#service" className="navbar-link" data-nav-link>Services</a>
                            </li>

                            <li>
                                <a onClick={toggleNavbar} href="#about" className="navbar-link" data-nav-link>About</a>
                            </li>

                            <li>
                                <a onClick={toggleNavbar} href="#project" className="navbar-link" data-nav-link>Project</a>
                            </li>

                            <li>
                                <a onClick={toggleNavbar} href="#review" className="navbar-link" data-nav-link>Review</a>
                            </li>

                            <li>
                                <a onClick={toggleNavbar} href="#contact" className="navbar-link" data-nav-link>Contact</a>
                            </li>
                            <li>
                                <a onClick={toggleNavbar} className="Togglebtn sideBarGetQuate">
                                    <span className="span">Get A Quote ➜</span>
                                </a>
                            </li>

                        </ul>
                    </div>

                </nav>

            </div>
        </header>
    );
};

export default Header;
