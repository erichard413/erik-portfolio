import React, { useState } from "react";
import "../stylesheets/Work.css";
import imgNHLStats from "../assets/project-nhlstats.png";
import imgJobly from "../assets/project-jobly.png";
import imgCalendar from "../assets/project-calendar-clone.png";
import imgHackorSnooze from "../assets/project-hackorsnooze.png";
import imgReactJokes from "../assets/project-react-jokes.png";
import imgConnect4 from "../assets/project-connect4.png";
import imgCCBankLocator from "../assets/project-ccbanklocator.png";
import imgTravelingDisc from "../assets/project-traveling-disc.png";
import Project from "./Project";
import Carousel from "react-elastic-carousel";

const Work = ({ theme }) => {
  const projects = [
    {
      img: imgTravelingDisc,
      name: "Traveling Disc Project",
      tech: "React, Vite, Geoapify API, Node, Postgresql, Express",
      description:
        'This is a disc golf related full stack application where a disc is left on a disc golf course with a printed QR code to take the user to a check in form to "check in" the disc at that course. The disc will then be left for another person to find. The next finder will be able to take the disc to another course and check it in there. This process repeats itself and users can see where the disc has been and how far the disc has travelled.',
      git: {
        frontend: "https://github.com/erichard413/disctracker-app-frontend",
        backend: "https://github.com/erichard413/disctracker-app-backend",
      },
      link: "https://travelingdisc.com",
      challenges:
        "Some challenges for this project included writing cleaner code, creating dynamic & reusable modal components, implementing design that focuses on user interaction and simplicity, using mobile first design best practices.",
    },
    {
      img: imgCalendar,
      name: "Google Calendar Clone",
      description:
        "This is a functional calendar application where the user can add/edit/delete events for a given day.",
      tech: "React, Vite, Typescript",
      git: {
        frontend: "https://github.com/erichard413/31-32-google-calendar-clone",
        backend: null,
      },
      link: "https://erichard413.github.io/31-32-google-calendar-clone/",
      challenges:
        "The main goal of this project is to create a simple calendar application similar to Google Calendar. While this is a vastly simplified version of Google Calendar it is still quite complicated and requires lots of unique and interesting code. This project was written entirely in TypeScript.",
    },
    {
      img: imgCCBankLocator,
      name: "Client Bank Locator",
      description:
        "This is a client bank locator made for my employer. This app will allow users to search for near by client banks that provide Convenient Cards products. Users can narrow the search based on miles away from a given address, and filter by product.",
      git: {
        frontend: "https://github.com/erichard413/cc-bank-locator",
        backend: null,
      },
      link: "https://cc-bank-locator.netlify.app",
      tech: "React, Vite, GoogleMapsAPI, Geoapify API",
      challenges: (
        <>
          This project came up as an internal need for our team to have a fast
          and easy tool to look up client banks in a given area. One important
          aspect was not to expose an entire listing of all of our clients,
          rather only show clients closed to a desired area. For this project I
          learned about how to calculate distances from latitude/longitude
          points using the{" "}
          <a href="https://en.wikipedia.org/wiki/Haversine_formula">
            Haversine formula
          </a>{" "}
          & learned about Geocoding APIs.
        </>
      ),
    },
    {
      img: imgNHLStats,
      name: "NHLStats App",
      description: (
        <>
          This is my Capstone project for Springboard/UMASS Global Software
          Engineering Bootcamp. This app provides an easy place to look up
          National Hockey League (NHL) hockey stats, track watched players and
          teams & playoffs information.{" "}
          <b>
            *Update: as of September 2023 the NHL deprecated their public API,
            this app is no longer functional.
          </b>
        </>
      ),
      tech: "React, React Router, Express, NodeJs, PostgreSQL, NHL API",
      git: {
        frontend: "https://github.com/erichard413/capstone-frontend",
        backend: "https://github.com/erichard413/capstone-backend",
      },
      link: "https://nhlstats-app.netlify.app",
      challenges:
        "When making this project I had to think hard about what data to save to my database versus what data should be retrieved from the NHL API. Along with this other challenges included implementing dynamic CSS styles based on users' favorite team, state management & storing user data.",
    },
    {
      img: imgJobly,
      name: "Jobly",
      description:
        "This was a project for Springboard/UMASS Global Software Engineering Bootcamp curriculum. This is a mock up of a job posting application where users can log in, sign up and apply for jobs. Back end was provided - I was tasked with creating the front-end from scratch using React.",
      tech: "React, React Router, Express, NodeJs, PostgreSQL",
      git: {
        frontend: "https://github.com/erichard413/jobly-react",
        backend: null,
      },
      link: "https://dysfunctional-paste.surge.sh/",
      challenges:
        "Some of the challenges this project presented was managing user data based on stored token, protecting routes for only logged in users, implementing useContext to manage state, & creating a satisfying search feature using Lodash debounce.",
    },
    {
      img: imgHackorSnooze,
      name: "Hack or Snooze",
      description:
        "In this project, I've built a functional clone of Hacker News, a popular tech news aggregator. The app allows users to create accounts and log in, save their favorite articles & upload stories of their own. This project was to practice using AJAX and APIs along with javascript & CSS.",
      tech: "Javascript, HTML, CSS, AJAX, Axios, 'Hack or Snooze' API",
      git: {
        frontend: "https://github.com/erichard413/HackOrSnooze",
        backend: null,
      },
      link: "https://erichard413.github.io/HackOrSnooze/",
    },
    {
      img: imgReactJokes,
      name: "React Jokes App",
      description:
        "A joke app where users can vote up or down 5 random jokes & save jokes from ICanHazDadJokeAPI using ReactJS.",
      tech: "React, Axios, ICanHazDadJokeAPI",
      git: {
        frontend: "https://github.com/erichard413/react-jokes",
        backend: null,
      },
      link: "https://erichard413.github.io/react-jokes/",
    },
    {
      img: imgConnect4,
      name: "Connect Four",
      description:
        "Connect4 is playable with two players. Or just play with yourself, whatever.",
      tech: "Javascript, HTML, CSS",
      git: {
        frontend: "https://github.com/erichard413/Connect4",
        backend: null,
      },
      link: "https://erichard413.github.io/Connect4/",
    },
  ];
  return (
    <div className={`Work section-div ${theme}`}>
      <h2>Some things I've built</h2>
      <p>
        A full collection of projects can be found on my{" "}
        <a href="https://github.com/erichard413" target="_blank">
          GitHub
        </a>
        .
      </p>
      <Carousel itemsToShow={1}>
        {projects.map(project => (
          <Project key={project.name} project={project} />
        ))}
      </Carousel>
    </div>
  );
};

export default Work;
