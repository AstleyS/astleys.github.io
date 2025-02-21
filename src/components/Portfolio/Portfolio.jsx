import React, { useState, useRef } from 'react';
import './Portfolio.css';
import { motion } from 'framer-motion';

import Project from '../Project/Project'

// Importing images correctly
import springbootGif from '../../assets/project_gif.gif';
import reactDashboardGif from '../../assets/project_gif.gif';
import javaCliGif from '../../assets/project_gif.gif';

import springbootImg from '../../assets/project_img.png';
import reactDashboardImg from '../../assets/project_img.png';
import javaCliImg from '../../assets/project_img.png';

const projects = [
  {
    id: 1,
    title: 'Path Finder Visualiser',
    technologies: ['react'],
    image: springbootImg,
    gif: springbootGif,
    website: 'https://astleys.github.io/web-pathfinder-visualizer',
    github: 'https://github.com/AstleyS/web-pathfinder-visualizer'
  },
  {
    id: 2,
    title: 'Flask Todo List',
    technologies: ['python'],
    image: reactDashboardImg,
    gif: reactDashboardGif,
    website: null, 
    github: 'https://github.com/AstleyS/web-flask-todolist'
  },
  {
    id: 3,
    title: 'Java CLI Tool',
    technologies: ['java'],
    image: javaCliImg,
    gif: javaCliGif,
    website: '#', 
    github: 'https://github.com/AstleyS'
  },
];

// Extract unique technology tabs
const getUniqueTechnologies = (projects) => {
  const techSet = new Set();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet);
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const sliderRef = useRef(null);

  const technologies = getUniqueTechnologies(projects);

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter((project) => project.technologies.includes(activeTab));

  /*
  // Slide navigation
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
  };
  */

  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="title portfolio-title">Portfolio Showcase</h2>

      {/* Technology Tabs */}
      <div className="tabs">
        <button 
          className={`toggle-button ${activeTab === 'all' ? 'active' : ''}`} 
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        {technologies.map((tech) => (
          <button
            key={tech}
            className={`toggle-button ${activeTab === tech ? 'active' : ''}`}
            onClick={() => setActiveTab(tech)}
          >
            {tech.charAt(0).toUpperCase() + tech.slice(1)}
          </button>
        ))}
      </div>

      <div className="slider-wrapper">
        {/* Left Arrow 
        <button className="arrow left-arrow" onClick={scrollLeft}>&#8592;</button>
        */}

        {/* Project Showcase */}
        <div className="projects-container" ref={sliderRef}>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Project project={project} hoveredProject={hoveredProject} />
            </motion.div>
          ))}
        </div>

        {/* Right Arrow 
        <button className="arrow right-arrow" onClick={scrollRight}>&#8594;</button>
        */}
      </div>
    </section>
  );
};

export default Portfolio;
