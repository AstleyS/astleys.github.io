import React from 'react';
import './Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="title contact-title">Contact Me</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Your message here"
              className="form-input"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send</button>
        </form>

        <div className="linkedin-contact">
          <p>Or connect with me on LinkedIn:</p>
          <a
            href="https://www.linkedin.com/in/astley-santos"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;