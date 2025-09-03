import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, technologies, image, demo_link, repo_link, category } = project;

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-category">{category}</div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="project-links">
          {demo_link && (
            <a 
              href={demo_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link demo-link"
            >
              Live Demo
            </a>
          )}
          {repo_link && (
            <a 
              href={repo_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link repo-link"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
