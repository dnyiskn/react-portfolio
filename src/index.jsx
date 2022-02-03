import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HeroImage from "./components/HeroImage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <HeroImage />
    <AboutMe />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
