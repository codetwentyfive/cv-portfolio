import React from 'react';

const Contact = () => {
  return (
    <footer className="glass-effect">
      <div className="contact">
        <section id="contact">
          <h2>Contact</h2>

          <p>
            <a href="mailto:chingisenkhbaatar@gmail.com">
              <img
                className="icon"
                src="./icons/icons8-email-64.png"
                alt="email icon"
              />
            </a>
            chingisenkhbaatar@gmail.com
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/chingis-enkhbaatar"
              target="_blank"
            >
              <img
                className="icon"
                src="./icons/icons8-linkedin-48.png"
                alt="LinkedIn icon"
              />
            </a>
            linkedin.com/in/chingis-enkhbaatar/
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Contact;
