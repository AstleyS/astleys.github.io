import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
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
    <section className="home-section" id="home">
      <div className="home-container">
        <img className="me-img" src="/vite.svg" alt="Me, Myself and I" />
        <div className="presentation">
          <h1 className="intro">
            Hello World!<br />
            I am Astley.<br />
            I <span className="typing">{currentPhrase}</span>
          </h1>
          <FontAwesomeIcon icon={faLaptopCode} size="2x" />
        </div>
      </div>
    </section>
  );
};

export default Home;