import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="nav-links">
        <div className="logo">
          <h2>Dev Patel</h2>
        </div>

        <div className={`links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="home" smooth={true} offset={-200} duration={500} onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500} onClick={() => setMenuOpen(false)}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="skills-container" smooth={true} offset={-200} duration={500} onClick={() => setMenuOpen(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} offset={-200} duration={500} onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </li>
          </ul>
        </div>

        <Link to="contact" smooth={true} offset={-200} duration={500}>
          <button className="btn-n">Contact</button>
        </Link>

    
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;