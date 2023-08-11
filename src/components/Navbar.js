import React from "react";
import { Link } from "react-router-dom";
import "../components/navbar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar() {
  return (
    <div className="navbar">
      <div className="icons">
        <LinkedInIcon />
        <EmailIcon />
        <GitHubIcon />
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
