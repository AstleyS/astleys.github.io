import React from 'react';
import { motion } from 'framer-motion';
import './MyPath.css';

const educationData = [
  {
    startDate: 'Sept.2021',
    endDate: 'Feb.2025',
    title: "Master's in Computer Science",
    institution: 'University of Luxembourg',
  },
  {
    startDate: 'Sept.2017',
    endDate: 'Sept.2020',
    title: "Bachelor's in Computer Engineering",
    institution: 'Universidade Lusófona de Humanidades e Tecnologias',
  },
];

const experienceData = [
  {
    title: 'Mobile Developer',
    company: 'LCSB - University of Luxembourg',
    startDate: 'April.2023',
    endDate: 'August.2023',
    description: [
      "Contributed to the foundational work and initial mobile application features for the Luxembourg Centre for Systems Biomedicine (LCSB) that not only helps Parkinson's patients monitor their condition, but also helps medical researchers perform biomedical analyses.",
      'The application was developed for iOS (iPhone and watchOS) with Swift and for Android/Samsung (wearOS).',
    ],
  },
  {
    title: 'Teaching Assistant',
    company: 'University of Luxembourg',
    startDate: 'Sept.2022',
    endDate: 'Jan.2024',
    description: [
      'Involved in the creation and automation of tests for grading programming assignments in a Web Development Bachelor’s course.',
      'Strengthened sense of responsibility and liability, time management, communication, and software testing.',
    ],
  },
];

const MyPath = () => {
  return (
    <section className="myPath-section" id="myPath">
      <h2 className="title myPath-title">My Path</h2>
      <div className="timeline">
        <div className="timeline-container">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="timeline-item left"
            >
              <div className="content">
                <h2>{item.title}</h2>
                <h5>{item.startDate} – {item.endDate}</h5>
                <span>{item.institution}</span>
              </div>
            </motion.div>
          ))}

          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="timeline-item right"
            >
              <div className="content">
                <h2>{item.title}</h2>
                <h5>{item.startDate} – {item.endDate}</h5>
                <span>{item.company}</span>
                <ul>
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyPath;