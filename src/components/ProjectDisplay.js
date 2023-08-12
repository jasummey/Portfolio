import React from "react";

function ProjectDisplay({ name, description, image, githubLink }) {
  return (
    <div className="project">
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={image} alt={name} />
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
    </div>
  );
}

export default ProjectDisplay;
