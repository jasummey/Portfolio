import React from "react";
import "../components/styles/experience.css";

function Experience() {
  return (
    <div className="experience">
      <div className="education">
        {" "}
        <h2>Education</h2>
        <h3> Associates Degree Business Administration</h3>
        <li>
          Cleveland Community College, Shelby, NC, In Progress, estimated
          completion, Fall, 2024.
        </li>
      </div>
      <div>
        <h3>Full Stack Web Development Certificate</h3>
        <li>
          Full Stack Web Development Certificate, Kenzie Academy, estimated
          completion October, 2023.
        </li>
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
