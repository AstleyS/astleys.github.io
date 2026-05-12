// Nav.jsx
// This components represents the navigation bar 

import React, {useState, useEffect, useRef} from 'react';
import './Nav.css';


const Nav = ({active, views}) => {

  return (
    <nav className='nav'>
      <div className='nav-logo'>
        DEV
      </div>

      <div className='nav-links'>
        {views.map((view, index) => {
          console.log(`Rendering view: ${view}, active: ${active}`);
          return (
            <button
             key={index}
             className={`nav-link ${active === view ? 'active' : ''}`}
            >
              {view}
            </button>
          );
        })}
      </div>


    </nav>

  );
};

export default Nav;
