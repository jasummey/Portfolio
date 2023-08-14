import React from "react";
import "../components/styles/home.css";
import profilePic from "./profilepic.jpg";

function Home() {
  return (
    <div className="home">
      <img className="img" src={profilePic} alt="Jane Summey headshot"></img>

      <div className="about">
        <h2>Nice to meet you, my name is Jane</h2>
        <div className="prompt">
          <span>
            I'm a new web developer with a passion for learning new things and
            growing in the field of web development. My interest began when I
            first learned the endless possibilities you can accomplish with
            writing code and designing web applications. When I am not coding or
            working, I am leading and teaching a group of Cub Scouts, as a Den
            Leader, for the Boy Scouts of America.
          </span>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul className="list">
          <li className="item">
            <span>ReactJS, HTML, CSS, BootStrap, JavaScript, MongoDB</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
