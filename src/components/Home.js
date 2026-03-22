import React from "react";
import "../components/styles/home.css";
// import profilePic from "./profilepic.jpg";
import headshot from "./headshot.jpg";

function Home() {
  return (
    <div className="home">
      <img className="img" src={headshot} alt="Jane Summey headshot"></img>

      <div className="about">
        <h2>Nice to meet you, my name is Jane</h2>
        <div className="prompt">
          <span>
            Data-focused Business Intelligence professional with hands-on
            experience delivering analytics and reporting solutions using Power
            BI, Excel, and Python, supported by formal coursework in SQL and
            data modeling. Strong foundation in ETL concepts, dimensional
            modeling, data quality practices, and stakeholder collaboration.
            Experienced in transforming raw data into reliable, well-documented
            datasets that support executive decision-making and scalable
            self-service analytics.
          </span>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul className="list">
          <li className="item">
            <span>
              ReactJS, HTML, CSS, BootStrap, JavaScript, MongoDB, Express,
              Node.js, SQL, Postman, GitHub, VS Code, Agile/Scrum Methodology,
              Microsoft Office Software, Python, Git Bash, Netlify, AWS, Power
              BI
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
