import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MyPath.css';

const educationData = [
  { year: 'Sept.2021--Feb.2025', title: 'Master\'s in Computer Science', institution: 'University of Luxembourg' },
  { year: 'Sept.2017--Sept.2020', title: 'Bachelor\'s in Computer Engineering', institution: 'Universidade Lusófona de Humanidades e Tecnologias' },
];

const experienceData = [
  { year: '', title: '', company: '' },
  { year: '', title: '', company: '' },
];

const MyPath = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleToggle = () => {
    setActiveTab(activeTab === 'education' ? 'experience' : 'education');
  };

  const currentData = activeTab === 'education' ? educationData : experienceData;

  return (
    <section className="myPath-section" id="myPath">
      <div className="toggle-container">
        <button
          className={`toggle-btn ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button
          className={`toggle-btn ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
      </div>

      <div className="timeline-container">
        <AnimatePresence mode="wait">
          {currentData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="timeline-item"
            >
              <div className="circle" />
              <div className="content">
                <h3>{item.year}</h3>
                <p>{item.title}</p>
                <span>{item.institution || item.company}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MyPath;
