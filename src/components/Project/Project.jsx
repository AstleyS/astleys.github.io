import React from 'react';
const Project = ({ project, hoveredProject }) => {
  return (
    <>
    <img
      src={hoveredProject === project.id ? project.gif : project.image}
      alt={project.title}
    />
    <h3>{project.title}</h3>
    </>
    
    
  );
};

export default Project;