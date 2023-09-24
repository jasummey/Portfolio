import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/styles/navbar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar() {
  const linkedIn = "https://www.linkedin.com/in/janesummey";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="name">Beatrice Jane Summey</div>
      <div className={`icons ${isMenuOpen ? "open" : ""}`}>
        <a href={linkedIn} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="mailto:bjanesummey@gmail.com">
          <EmailIcon />
        </a>
        <a
          href="https://github.com/jasummey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>
      <div
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/projects" onClick={toggleMenu}>
          Projects
        </Link>
        <Link to="/experience" onClick={toggleMenu}>
          Experience
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
