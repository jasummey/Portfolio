import React from "react";
import "../components/home.css";
import profilePic from "./profilepic.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
  return (
    <div className="home">
      <img className="img" src={profilePic} alt="Jane Summey headshot"></img>

      <div className="about">
        <h2>Nice to meet you, my name is Jane</h2>
        <div className="prompt">
          <p>a little something about me.</p>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul className="list">
          <li className="item">
            <h2>Languages</h2>
          </li>
        </ul>
        <LinkedInIcon />
        <EmailIcon />
        <GitHubIcon />
      </div>
    </div>
  );
}

export default Home;
