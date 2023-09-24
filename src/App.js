import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
// import Resume from "./components/Resume";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
