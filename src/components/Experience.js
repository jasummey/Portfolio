import React from "react";
import "../components/experience.css";

function Experience() {
  return (
    <div className="experience">
      <div className="education">
        {" "}
        <h2>Education</h2>
        <h3> Associates Degree Business Administration</h3>
        <span>
          Cleveland Community College, Shelby, NC, In Progress, estimated
          completiion, Fall, 2024.
        </span>
      </div>
      <div>
        <span>
          Full Stack Web Development Certificate, Kenzie Academy, estimated
          completiion October, 2023.
        </span>
      </div>
      <br />
      <div>
        <h2 className="workExp">Work Experience</h2>
        <span>Work experience.</span>
      </div>
    </div>
  );
}

export default Experience;
