import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="contain max-sm:px-[2%] sm:px-[5%] md:px-[5%] lg:px-[5%] xl:px-[5%] 2xl:px-[5%]">
        <div className="logo">
         <img src='https://sokunthearoth.github.io/The-Historical-of-Khmer-Empire/Image/logo.png' width={"200px"} alt='logo'/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <svg class="h-8 w-6 text-whit" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/history">History</NavLink>
            </li>
            <li>
              <NavLink to="/civilization">Civilization</NavLink>
            </li>
            <li>
              <NavLink to="/art">Art</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavigationBar;