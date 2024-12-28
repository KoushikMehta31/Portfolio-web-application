
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  
  const closeMenu = () => {
    setIsMobile(false);
    window.scrollTo(0, 0); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/Images/Logo.jpg" className="img-logo" alt="Website Logo" />
        </div>

        <div className={`nav-links-container ${isMobile ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/skills" onClick={closeMenu}>Skills</Link>
            </li>
            <li>
              <Link to="/myproject" onClick={closeMenu}>My Projects</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
