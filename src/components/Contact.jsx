import React from "react";
import "../stylesheets/Contact.css";
import resume from "../assets/Erik-Richard-Resume-2025.pdf";

const Contact = ({ theme }) => {
  return (
    <div className={`Contact section-div ${theme}`}>
      <h2>Get in Touch</h2>
      <div className="Contact-content">
        <p>
          I am currently looking for new opportunities! My inbox is always open.
          Feel free to send me an email.
        </p>
        <div>
          <a href={resume} target="_blank">
            <div className="Contact-Box">Resume</div>
          </a>
          <a href="mailto:erichard413@outlook.com">
            <div className="Contact-Box">Email Me</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
