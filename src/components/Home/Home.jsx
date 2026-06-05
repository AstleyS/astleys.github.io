import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import cv from '../../data/cv.json'
import './Home.css';

const Home = ({ setActiveView }) => {
  return (
    <section className="home-section">
      <div className='presentation'>
        <div className="home-topline">
          Available for work
        </div>

        <h1>{cv.title}</h1>

        <div className="social-links">
          <a href="https://github.com/AstleyS" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/astley-santos" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        <p className='intro'>{cv.tagline}</p>

        <button
          type="button"
          className="home-action"
          onClick={() => setActiveView('PROJECTS')}
        >
          See my work
        </button>
      </div>
    </section>
  );

  
};

export default Home;


