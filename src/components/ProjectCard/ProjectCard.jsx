import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './ProjectCard.css';

const imageModules = import.meta.glob('../../assets/*.{png,jpg,jpeg,gif}', {
  eager: true,
  as: 'url',
});

const ProjectCard = ({
  project,
  isExpanded,
  isShrunk,
  onClick,
  onClose,
  colors,
}) => {
  const col = colors?.[project.category] || colors?.Web;
  const projectImage = project.image
    ? imageModules[`../../assets/${project.image}`] || project.image
    : undefined;
  const descriptionText = isExpanded
    ? project.detail ?? project.description
    : project.description;

  return (
    <div
      className={`project-card ${isExpanded ? "expanded" : ""} ${isShrunk ? "shrunk" : ""}`}
      onClick={isExpanded ? undefined : onClick}
    >
      {/* close button */}
      {isExpanded && (
        <button
          className="project-close"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          ✕
        </button>
      )}

      {/* thumbnail */}
      <div className="project-thumb" style={{ background: col?.bg }}>
        <img
          src={projectImage}
          alt={`${project.title} thumbnail`}
          className="project-thumb-image"
        />
        <div className="project-thumb-overlay" />
      </div>

      {/* body */}
      <div className="project-body">
        <p
          className="project-meta"
          style={{ color: col?.accent }}
        >
          {project.category} · {project.year}
        </p>

        <h3 className="project-title">
          {project.title}
        </h3>

        <p className="project-desc">
          {project.description}
        </p>

        {/* links */}
        {isExpanded && (
          <div className="project-links">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="project-link primary"
              >
                <FontAwesomeIcon icon={faGlobe} style={{ marginRight: '0.4rem' }} />
                Website
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <FontAwesomeIcon icon={faGithub} style={{ marginRight: '0.4rem' }} />
                GitHub
              </a>
            )}
          </div>
        )}

        {/* tags */}
        <div className="project-tags">
          {project.technologies.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;