import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HeroImage from "../src/components/HeroImage";
import AboutMe from "../src/components/AboutMe";
import Contact from "./components/Contact";

ReactDOM.render(
  <React.StrictMode>
    <HeroImage />
    <AboutMe />
    <Contact />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
