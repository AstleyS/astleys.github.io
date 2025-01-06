import React from 'react';

function About() {
  return (
    <section className="section about-section" id="about">
      <h2 className="title about-title">About</h2>
      <h5 className="availability-status">Currently Available</h5>
      <div className="section-content">
        <p className="about">
          Living in Luxembourg, I’m a recent Computer Engineer graduate at Universidade
          Lusófona de Humanidades e Tecnologias in Portugal, with a <strong>great
          sense of facing new opportunities and conquering new challenges</strong>
          that allow me to evolve not only as an efficient and capable
          professional, but as a person that can <em>help better our world with
          the power of technology.</em>
          <br />
          <br />
          I love Software Development. I am focused on 
          <span className="job-positions">Software Engineer | Software Developer</span> positions or internships.
        </p>
        <div className="skills-container">
          <h5 className="skills-title">What about... my skills?</h5>
          <div className="skills">
            <div className="skill-level proficient">
              <h3>Proficient</h3>
              <ul className="skill-list">
                <li>Java</li>
                <li>Kotlin</li>
                <li>Python</li>
                <li>C</li>
                <li>HTML/CSS</li>
                <li>Git</li>
                <li>VS Code</li>
                <li>Intellij IDEA</li>
              </ul>
            </div>
            <div className="skill-level more-familiar">
              <h3>More than Familiar</h3>
              <ul className="skill-list">
                <li>JavaScript</li>
                <li>Angular</li>
                <li>Django</li>
                <li>Android</li>
                <li>Flutter</li>
                <li>Linux</li>
                <li>Spring Boot</li>
                <li>SQL, MySQL, PostgreSQL</li>
              </ul>
            </div>
            <div className="skill-level familiar">
              <h3>Needs more Work</h3>
              <ul className="skill-list">
                <li>NodeJS</li>
                <li>ReactJS</li>
                <li>C++</li>
                <li>PHP</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>
          <p className="watch-resume">Want to check my <a href="doc/resume.pdf" target="_blank">resume</a>?</p>
        </div>
      </div>
    </section>
  );
}

export default About;