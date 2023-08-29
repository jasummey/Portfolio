import React from "react";
import ProjectDisplay from "./ProjectDisplay";
import affgeneratorimg from "./affgeneratorimg.png";

export default function ProjectList() {
  const projects = [
    {
      name: "Affirmation Generator",
      description:
        "Application where users can visit and get a random affirmation. Completed using React.",
      image: affgeneratorimg,
      githubLink: "https://github.com/jasummey/affirmationGenerator",
    },
    {
      name: "Connect Four",
      image: "",
      description: "Connect Four Team Project",
      githubLink:
        "https://github.com/KenzieAcademy-Students/teamwork-assessment-connect-four-jasummey",
    },
  ];
  return (
    <div>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <ProjectDisplay
              name={project.name}
              description={project.description}
              image={project.image}
              githubLink={project.githubLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
