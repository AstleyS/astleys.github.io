import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on window resize if size is larger than 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <nav className="nav">
        <h3 className="headline">Astley Santos</h3>

        {/* Navigation Links (Hidden on small screens) */}
        <ul className={`nav-links ${isMenuOpen ? 'menu-active' : ''}`}>
          <li><a href="/" className="nav-item active-link">Home</a></li>
          <li><a href="#about" className="nav-item">About</a></li>
          <li><a href="#portfolio" className="nav-item">Portfolio</a></li>
          <li><a href="#contact" className="nav-item">Contact me!</a></li>
        </ul>

        {/* Menu Icon (Visible only on small screens) */}
        <FontAwesomeIcon
          icon={isMenuOpen ? faTimes : faBars}
          className="burger"
          onClick={toggleMenu}
        />

        {/* Full-Screen Overlay Menu */}
        {isMenuOpen && (
          <div className="overlay-menu">
            <ul className="overlay-links">
              <li><a href="/" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact me!</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
