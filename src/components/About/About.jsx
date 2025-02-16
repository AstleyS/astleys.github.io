import React from 'react';
import './About.css';

import SkillCarousel from '../SkillCarousel/SkillCarousel';

const About = () => {

  const logos_programming = [
    { url: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white', alt: 'Java' },
    { url: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black', alt: 'JavaScript' },
    { url: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white', alt: 'Python' },
    { url: 'https://img.shields.io/badge/Kotlin-0095D5?style=for-the-badge&logo=kotlin&logoColor=white', alt: 'Kotlin' },
    { url: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black', alt: 'React' },
    { url: 'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white', alt: 'TypeScript' },
    { url: 'https://img.shields.io/badge/C%2FC%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white', alt: 'C/C++' },
    { url: 'https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=sql&logoColor=white', alt: 'SQL' },
  ];

  const logos_aiml = [
    { url: 'https://img.shields.io/badge/Machine%20Learning-03A9F4?style=for-the-badge&logo=machine-learning&logoColor=white', alt: 'Machine Learning' },
    { url: 'https://img.shields.io/badge/Deep%20Learning-0F9D58?style=for-the-badge&logo=tensorflow&logoColor=white', alt: 'Deep Learning' },
    { url: 'https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white', alt: 'PyTorch' },
    { url: 'https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white', alt: 'Pandas' },
    { url: 'https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white', alt: 'NumPy' },
    { url: 'https://img.shields.io/badge/Scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white', alt: 'Scikit-learn' },
  ];

  const logos_software_dev = [
    { url: 'https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white', alt: 'HTML' },
    { url: 'https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white', alt: 'CSS' },
    { url: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black', alt: 'React' },
    { url: 'https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white', alt: 'Spring Boot' },
    { url: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white', alt: 'Node.js' },
    { url: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white', alt: 'Express.js' },
    { url: 'https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white', alt: 'Android' },
    { url: 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white', alt: 'Angular' },
    { url: 'https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white', alt: 'iOS' },
  ];

  const logos_miscellaneous = [
    { url: 'https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white', alt: 'Arduino' },
    { url: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white', alt: 'Docker' },
    { url: 'https://img.shields.io/badge/Ansible-2A3CFF?style=for-the-badge&logo=ansible&logoColor=white', alt: 'Ansible' },
    { url: 'https://img.shields.io/badge/GitLab%20CI/CD-FCA121?style=for-the-badge&logo=gitlab&logoColor=white', alt: 'GitLab CI/CD' },
  ];


  return (
    <>
      <section className="section about-section" id="about">
        <h2 className="title about-title">About</h2>
        <h5 className="availability-status">Currently Available</h5>
        <div className="section-content">
        <p className="about">
            A Master’s graduate in Computer Science with a deep appreciation for every stage of bringing an 
            idea to life, from inception to development. My ambition lies in leveraging advanced technologies to 
            tackle complex challenges with a strong interest in Software Development and Artificial Intelligence 
            innovations. With a solid foundation in modern technologies and a passion for problem-solving, I 
            am eager to contribute to impactful and meaningful projects.
          </p>

          <SkillCarousel title="Programming Languages" skillLogos={logos_programming} />
          <SkillCarousel title="AI & Machine Learning" skillLogos={logos_aiml} />
          <SkillCarousel title="Software Development" skillLogos={logos_software_dev} />
          <SkillCarousel title="Miscellaneous" skillLogos={logos_miscellaneous} />

          {/* <div className="skills-container">
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
          </div> */}
        </div>
      </section>
    </>
  );
};

export default About;