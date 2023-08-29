import React from "react";

function ProjectDisplay({ name, description, image, githubLink }) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a
          href={githubLink}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
