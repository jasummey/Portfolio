import React from "react";
import { Link } from "react-router-dom";
import "../components/navbar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar() {
  const linkedIn = "https://www.linkedin.com/in/janesummey";
  return (
    <div className="navbar">
      <div className="name">Jane Summey</div>
      <div className="icons">
        <a href={linkedIn} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>

        <a href="mailto:bjanesummey@gmail.com">
          <EmailIcon />
        </a>
        <a href="https://github.com/jasummey">
          <GitHubIcon />
        </a>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </div>
  );
}

export default Navbar;
