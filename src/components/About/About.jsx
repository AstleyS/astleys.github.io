import React from 'react';
import './About.css';
import resume from '../../assets/ENG_SDev_Astley Santos_Resume_v4.pdf';
import {motion} from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import cv from '../../data/cv.json';

const About = () => {
  

  return (
    <>
      <section className="about-section" id="about">
        <h2 className="title about-title">About</h2>
        <div className="section-container">
          <p className="about">
            {cv.about}
          </p>
        </div>

        <div className="cv" style={{textAlign: 'center'}}>
          <h3>Curriculum Vitae</h3>
          <p>Have a look on my CV to learn more about my work experience and education.</p>
          <button type="button" onClick={() => window.open(resume, '_blank')}>See CV   <FontAwesomeIcon icon={faFile} />
          </button>
        </div>

      </section>
    </>
  );
};

export default About;