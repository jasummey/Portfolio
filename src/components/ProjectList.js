import React from "react";
import ProjectDisplay from "./ProjectDisplay";

export default function ProjectList() {
  const projects = [
    {
      name: "Project 1",
      description: "app description",
      image: "",
      githubLink: "https://github.com/jasummey",
    },
    {
      name: "Project 2",
      image: "",
      description: "app description",
      githubLink: "https://github.com/jasummey",
    },
  ];
  return (
    <div>
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectDisplay
            key={index}
            name={project.name}
            description={project.description}
            imageUrl={project.image}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}
