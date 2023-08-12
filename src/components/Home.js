import React from "react";
import "../components/home.css";
import profilePic from "./profilepic.jpg";

function Home() {
  return (
    <div className="home">
      <img className="img" src={profilePic} alt="Jane Summey headshot"></img>

      <div className="about">
        <h2>Nice to meet you, my name is Jane</h2>
        <div className="prompt">
          <span>a little something about me.</span>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul className="list">
          <li className="item">
            <h2>Languages</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
