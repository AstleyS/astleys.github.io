import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = ({ project, hoveredProject }) => {
  return (
    <div className="project-card">
      <img
        src={hoveredProject === project.id ? project.gif : project.image}
        alt={project.title}
      />
      <h3>{project.title}</h3>
      {hoveredProject === project.id && (
        <div className="project-links">
          {project.website && (
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon style={{marginRight: '10px'}} icon={faGlobe} />
          </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Project;