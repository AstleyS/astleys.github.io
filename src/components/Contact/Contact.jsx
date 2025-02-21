import React, { useState } from 'react';
import './Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  /* Function to handle form submission */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/xwpvyjgk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setStatus('Message sent! 👍');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setStatus('Failed to send message. Please try again.');
      }

    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="title contact-title">Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here"
              className="form-input"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send</button>
        </form>

        {status && <p className="form-status">{status}</p>} {/* Display the status message */}

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