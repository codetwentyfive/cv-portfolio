import React from "react";

const Header = () => {
  return (
    <header className="">
      <div className="main-photo-container no-backdrop-filter">
        <h1 className="name">Chingis Enkhbaatar</h1>
      </div>
      <section className="about-me glass-effect">
        <h2>About me</h2>
        <p className="about-me">
          Dedicated and detail-oriented, aspiring to build a dynamic career in
          web development with expertise in both front-end and back-end.
          <br />
          Possess a strong foundation in JavaScript, HTML, CSS, and Python,
          coupled with experience in modern frameworks such as React for
          front-end development and Node.js for back-end development.
          <br />
          Adept at creating responsive and user-friendly web applications
        </p>
        <div className="contact-info">
          <p className="contact-text">Contact:</p>
          <div className="icon-container">
            <a href="tel:01573 5203036">
              <img
                className="icon"
                src="/icons/icons8-phone-50.png"
                alt="phone icon"
              />
            </a>
            <a href="mailto:chingisenkhbaatar@gmail.com">
              <img
                className="icon"
                src="/icons/icons8-email-64.png"
                alt="email icon"
              />
            </a>
            <a href="https://github.com/codetwentyfive" target="_blank">
              <img
                className="icon"
                src="/icons/icons8-github-50.png"
                alt="GitHub icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/chingis-enkhbaatar"
              target="_blank"
            >
              <img
                className="icon"
                src="/icons/icons8-linkedin-48.png"
                alt="LinkedIn icon"
              />
            </a>
          </div>
        </div>
      </section>
      <div className="draw">
        <div className="rectangle"></div>
        <div className="triangle"></div>
      </div>
    </header>
  );
};

export default Header;
