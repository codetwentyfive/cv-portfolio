const Projects = () => {
  const projects = [
    { id: 1, name: 'Etch-A-Sketch', screenshot: 'etchasketch-screenshot.png', description: 'My twist on the nostalgic Etch-a-Sketch toy.This interactive web application brings the nostalgic look to your browser.Letting you create and save your drawings with adjustable drawingboard sizes and color.' },
    { id: 2, name: 'Project 2', screenshot: 'project2-screenshot.png', description: '...' },
    // Add more projects as needed
  ];

  return (
    <main>
      <div className="main-wrapper">
        <h2>My work</h2>
        <div className="project-container">
          {projects.map((project) => (
            <section key={project.id} className="project card glass-effect">
              <div className={`screenshot color${project.id}`}>
                <img
                  src={`/images/${project.screenshot}`}
                  alt={`Screenshot of ${project.name}`}
                />
              </div>
                <div className="title">
                  <h3>{project.name}</h3>
                  {/* ... Other project details */}
                </div>
              <div className="content">
                <p className="description">{project.description}</p>
              </div>
              <div className="project-icon-container">
              <a href="https://github.com/codetwentyfive/Etch-A-Sketch" target="_blank">
            <img
              className="icon"
              src="/icons/icons8-github-50.png"
              alt="GitHub icon"
            />
          </a>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
