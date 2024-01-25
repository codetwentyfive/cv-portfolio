import React from "react";

const Projects = () => {
  return (
    <main>
      <div className="main-wrapper">
        <h2>My work</h2>
        <div className="project-container">
          {[1, 2, 3, 4, 5, 6, 7].map((index) => (
            <section key={index} className="project card glass-effect">
              <div className={`screenshot color${index}`}>
                screenshot of project
              </div>
              <div className="content">
                <div className="title">
                  <h3>Project name</h3>
                  <div className="project-icon-container">
                    <img
                      className="project-icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                      alt="GitHub icon"
                    />
                    <img
                      src="imgs/open-in-new.svg"
                      alt="Icon open external link"
                    />
                  </div>
                </div>
                <p className="description">
                  Short description of the project. Just a couple of sentences
                  will do.
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
