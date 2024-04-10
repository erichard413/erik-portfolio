import React from "react";
import "../stylesheets/Project.css";

const Project = ({ project }) => {
  return (
    <div className="Project">
      <h3>{project.name}</h3>
      <div className="Project-img left-content">
        <a href={project.link} target="_blank">
          <img src={project.img} alt={project.name} />
        </a>
      </div>
      <div className="right-content">
        <ul>
          <li>{project.description}</li>
          <li>
            <span className="li-bold">Tech Stack:</span> {project.tech}
          </li>
          <li>
            <span className="li-bold">
              Git Repository{project.git.backend && " (frontend)"}:{" "}
            </span>
            <a href={project.link} target="_blank">
              {project.git.frontend}
            </a>
          </li>
          {project.git.backend && (
            <li>
              <span className="li-bold">Git Repository (backend): </span>
              <a href={project.link} target="_blank">
                {project.git.backend}
              </a>
            </li>
          )}
          <li>
            <span className="li-bold">Deployed Link:</span>{" "}
            <a href={project.link} target="_blank">
              {project.link}
            </a>
          </li>
          {project.challenges && (
            <li>
              <span className="li-bold">Challenges:</span> {project.challenges}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Project;
