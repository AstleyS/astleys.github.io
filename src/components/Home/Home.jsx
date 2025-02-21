import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import me from '../../assets/me.jpg';

import './Home.css';

const phrases = ['am a Software Developer', 'am a Machine Learning enthusiast', 'transform ideas into reality with technology'];

const Home = () => {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentPhrase((prev) => {
        const nextChar = phrases[index].charAt(prev.length);
        if (nextChar) {
          return prev + nextChar;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentPhrase('');
            setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          }, 2000);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(typingInterval);
  }, [index]);

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <img
          src={me}
          className="me-img"
          alt="Profile picture of Astley Santos"
        />
      </div>
      <div className='presentation'>
        <h1>
          Hi World!
          <br />
          I am Astley Santos
        </h1>
        <h2 style={{  background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',  WebkitBackgroundClip: 'text',  WebkitTextFillColor: 'transparent',  fontSize: '2rem',  fontWeight: 'bold',  margin: '0 0 10px 0' }}>
          Software Engineer
        </h2>
        <span>
          <a style={{ marginRight:'10px' }} href="https://github.com/AstleyS" target="_blank">
            <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/astley-santos" target="_blank">
            <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faLinkedin} />
          </a>
        </span>
        <p className='intro'>
        Turning ideas into reality through technology, constantly learning and growing along the way.
        </p>
      </div>
    </section>
  );

  
};

export default Home;


