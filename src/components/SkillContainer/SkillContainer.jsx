import React from 'react'; // Importing React
import { motion } from 'framer-motion'; // Importing motion from framer-motion for animations
import './SkillContainer.css'; // Importing the CSS file for styling

const SkillContainer = ({ title, skillLogos }) => {
  return (
    <div className="carousel-container">
      <h2 className="carousel-title">{title}</h2> {/* Displaying the title */}
      <div className="carousel-track">
        {skillLogos.map((logo, index) => (
          <motion.img
            key={index} // Setting a unique key for each logo
            src={logo.url} // Setting the source URL for the logo
            alt={logo.alt} // Setting the alt text for the logo
            className="carousel-logo" // Applying the CSS class for styling
            whileHover={{ scale: 1.2 }} // Adding a hover effect to scale the logo
          />
        ))}
      </div>
    </div>
  );
};

export default SkillContainer; // Exporting the SkillContainer component as the default export