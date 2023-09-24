import React from "react";
import ProjectDisplay from "./ProjectDisplay";
import affgeneratorimg from "./affirmationgenerator.png";
import wanderlogimg from "./wanderlog screenshot.png";
import connectfourimg from "./connect four screenshot.png";

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
      image: connectfourimg,
      description: "Connect Four Team Project",
      githubLink:
        "https://github.com/KenzieAcademy-Students/teamwork-assessment-connect-four-jasummey",
    },
    {
      name: "Wander Log",
      image: wanderlogimg,
      description:
        "Travel log for users to leave logs regarding their travels.",
      githubLink: "https://github.com/jasummey/travellog",
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
