import React from "react";
import "../stylesheets/Education.css";
import School from "./School";

const Education = ({ theme }) => {
  const education = [
    {
      name: "React Simplified - Advanced",
      cert: "Certificate of Completion - Advanced React Course",
      description:
        "Attended online certification course covering advanced React concepts such as advanced hooks, CSS alternatives, typescript & type safety, performance & testing, clean code & asynchronous react-router implementation.",
      skills:
        "React, Vite, Typescript, Advanced React Hooks, Asynchronous react-router implementation, React best practices & unit tests using vitest.",
      credential:
        "https://courses.webdevsimplified.com/certificates/cert_aWBUlKDe",
      date: "December 2023",
    },
    {
      name: "University of Massachusetts Global - Springboard",
      cert: "Software Engineering Career Track Certification, Computer Software Engineering",
      description:
        "Completed a demanding 800+ hours of hands-on course material along with weekly one on one discussions with an industry expert mentor. Responsible for completing projects on time, developing, designing and planning full stack projects. Gained mastery in skills in front-end web development, back-end web development, relational database management, as well as advanced computer science topics such as datastructures & algorithms.",
      skills:
        "Javascript, HTML, CSS, Python, SQL, Flask, NodeJS, Express, API Development, REST APIs, React, AJAX Frameworks, PostgreSQL, Web Development, & more",
      credential:
        "https://www.credential.net/c628090f-1683-4756-8963-a39d84a31d60#gs.xp1it9",
      date: "June 2022 - April 2023",
    },
    {
      name: "University of Massachusetts Amherst",
      cert: "Bachelors Degree in Business Administration: Marketing",
      description:
        "Obtained four year degree from the Isenberg School of Management.",
      skills:
        "Marketing concepts, Business communication strategies, Management skills",
      date: "Spring 2006 - Fall 2010",
    },
  ];
  return (
    <div className={`Education section-div ${theme}`}>
      <h2>Education</h2>
      <div className="schools">
        {education.map(school => (
          <School school={school} key={school.name} />
        ))}
      </div>
    </div>
  );
};

export default Education;
