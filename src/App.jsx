import React, { useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import initializeMatrixBackground from "./components/matrixBackground";

const App = () => {
 
    useEffect(() => {
      initializeMatrixBackground();
    }, []);

  

  return (
    <div>
        <div className="matrix-background">
        <canvas id="Matrix"></canvas>
      </div>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
