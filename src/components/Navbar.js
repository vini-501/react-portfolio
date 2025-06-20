import React, { useState } from 'react';
import { FaBars, FaTimes, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link 
          to="home" 
          className="navbar-logo" 
          onClick={closeMobileMenu}
          smooth={true} 
          duration={500}
        >
          Vini <FaHeart className="navbar-icon" />
        </Link>
        
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link 
              to="home" 
              className="nav-links" 
              onClick={closeMobileMenu}
              smooth={true} 
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="about" 
              className="nav-links" 
              onClick={closeMobileMenu}
              smooth={true} 
              duration={500}
              offset={-80}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="skills" 
              className="nav-links" 
              onClick={closeMobileMenu}
              smooth={true} 
              duration={500}
              offset={-80}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="contact" 
              className="nav-links" 
              onClick={closeMobileMenu}
              smooth={true} 
              duration={500}
              offset={-80}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;