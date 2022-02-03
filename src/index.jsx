import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HeroImage from "./components/HeroImage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
ReactDOM.render(
  <React.StrictMode>
    <HeroImage />
    <AboutMe />
    <Projects />
    <Contact />
  </React.StrictMode>,
  document.getElementById("root")
);
