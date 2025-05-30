import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Project.css'

const Project = ({ project, hoveredProject, selectedProject, onSelect }) => {
  // Show description if either hovered or selected
  const showDescription = hoveredProject === project.id || selectedProject === project.id;
  
  return (
    <>
      <div 
        className="project-image-container"
        onClick={() => onSelect(selectedProject === project.id ? null : project.id)}
        onMouseEnter={() => project.available && onSelect(project.id, true)}
        onMouseLeave={() => project.available && !selectedProject && onSelect(null, true)}
      >
        <img
          src={project.image}
          alt={project.title}
        />
      </div>
      <h3 className="project-title">{project.title}</h3>
      <div className="project-links">
            {project.website && (
            <a 
              href={project.website} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon icon={faGlobe} />
            </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
      </div>

      {showDescription && (
        <div className="project-description">
          <p>{project.description}</p>
        </div>
      )}
    </>
  );
};

export default Project;