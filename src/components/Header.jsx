import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <h3 className="headline">Astley Santos</h3>
        <ul className="nav-links">
          <li><a href="/" className="nav-item active-link">Home</a></li>
          <li><a href="/about" className="nav-item">About</a></li>
          <li><a href="/portfolio" className="nav-item">Portfolio</a></li>
          <li><a href="/contact" className="nav-item">Contact me!</a></li>
        </ul>
        <span className="material-icons burger">menu</span>
        <div className="social-links">
          <a href="https://github.com/AstleyS" target="_blank" rel="noopener noreferrer">
            <img src="img/github.svg" alt="GitHub" />
          </a>
          {/* Add other social links here */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
