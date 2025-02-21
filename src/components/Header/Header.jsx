import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  // Smooth scrolling and set active section
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      setIsMenuOpen(false);
    }
  };

  // Observe sections and update active link
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header>
      <nav className="nav">
        <h3 className="headline">Astley Santos</h3>

        {/* Navigation Links (Hidden on small screens) */}
        <ul className={`nav-links ${isMenuOpen ? 'menu-active' : ''}`}>
          <li><a href="/" className={`nav-item ${activeSection === 'home' ? 'active-link' : ''}`} onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
          <li><a href="#about" className={`nav-item ${activeSection === 'about' ? 'active-link' : ''}`} onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
          <li><a href="#portfolio" className={`nav-item ${activeSection === 'portfolio' ? 'active-link' : ''}`} onClick={(e) => handleLinkClick(e, 'portfolio')}>Portfolio</a></li>
          <li><a href="#contact" className={`nav-item ${activeSection === 'contact' ? 'active-link' : ''}`} onClick={(e) => handleLinkClick(e, 'contact')}>Contact me!</a></li>
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
              <li><a href="/" className={activeSection === 'home' ? 'active-link' : ''} onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
              <li><a href="#about" className={activeSection === 'about' ? 'active-link' : ''} onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
              <li><a href="#portfolio" className={activeSection === 'portfolio' ? 'active-link' : ''} onClick={(e) => handleLinkClick(e, 'portfolio')}>Portfolio</a></li>
              <li><a href="#contact" className={activeSection === 'contact' ? 'active-link' : ''} onClick={(e) => handleLinkClick(e, 'contact')}>Contact me!</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;