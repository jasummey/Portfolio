import React from "react";
import resume from "../pdf/Resume.pdf";
import "./resume.css";

function Resume() {
  return (
    <div>
      <object
        className="resume"
        data={resume}
        alt="Jane Summey Resume"
      ></object>
      {/* <embed src={resume} type="resume/pdf" width="100%" height="800px" /> */}
    </div>
  );
}

export default Resume;
