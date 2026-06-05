// Nav.jsx
// This components represents the navigation bar 

import React, {useState, useEffect, useRef} from 'react';
import './Nav.css';


const Nav = ({active, views, setActiveView}) => {
  return (
    <nav className='nav'>
      <div className='nav-logo'>
        Astley Santos
      </div>

      <div className='nav-links'>
        {views.map((view, index) => (
          <button
            key={index}
            className={`nav-link ${active === view ? 'active' : ''}`}
            onClick={() => setActiveView(view)}
            aria-current={active === view ? 'page' : undefined}
          >
            {view}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
