import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import me from '../../assets/me.jpg';

import './Home.css';

const Home = () => {
  return (
    <>
    <div className="home-container">
      { /*
      }
      <img
        src={me}
        className="me-img"
        alt="Profile picture of Astley Santos"
      />
      */ }
    </div>
    <p> Available for work · 2026</p>
    <div className='presentation'>
      <h1>
        Software & ML Engineer
      </h1>
      <div style={{ margin: '20px'}}>
        <a style={{ marginRight:'10px' }} href="https://github.com/AstleyS" target="_blank">
          <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/astley-santos" target="_blank">
          <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faLinkedin} />
        </a>
      </div>
      <p className='intro'>
        Software engineer passionate about building things that matter.
      </p>
    </div>
    </>
  );

  
};

export default Home;


