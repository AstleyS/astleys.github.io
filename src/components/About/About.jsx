import React from 'react';
import './About.css';

import resume from '../../assets/resume.pdf';
import mePhoto from '../../assets/me.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import cv from '../../data/cv.json';

const About = () => {
  return (
    <section
      className="about-section"
      id="about"
    >
      {/* LEFT */}
      <div className="about-content">

        <p className="about-label">
          About me
        </p>

        <h2 className="about-name">
          {cv.name}
        </h2>

        <p className="about-bio">
          {cv.about}
        </p>

        {/* SKILLS */}
        <div className="skills">
          {cv.skills.map((skill) => (
            <span
              key={skill}
              className="skill-pill"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* EXPERIENCE */}
        <div className="experience-list">

          {cv.experience.map((exp, i) => (
            <div
              key={i}
              className="experience-item"
            >
              <div className="experience-period">
                {exp.duration}
              </div>

              <div className="experience-info">
                <p className="experience-role">
                  {exp.position} · {exp.company}
                </p>

                <p className="experience-desc">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* CV BUTTON */}
        <div className="cv-container">

          <h3>
            Curriculum Vitae
          </h3>

          <p>
            Have a look at my CV to learn more
            about my work experience and
            education.
          </p>

          <button
            type="button"
            className="cv-button"
            onClick={() =>
              window.open(resume, '_blank')
            }
          >
            See CV

            <FontAwesomeIcon
              icon={faFile}
            />
          </button>

        </div>

      </div>

      {/* RIGHT CARD */}
      <div className="about-card">
        <img src={mePhoto} alt="Astley Santos" className="about-photo" />
        <div className="about-card-glow" />
      </div>
    </section>
  );
};

export default About;