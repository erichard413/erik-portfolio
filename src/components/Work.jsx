import React, {useState} from 'react';
import '../stylesheets/Work.css';
import imgNHLStats from '../assets/project-nhlstats.png'
import imgJobly from '../assets/project-jobly.png'
import imgHackorSnooze from '../assets/project-hackorsnooze.png'
import imgReactJokes from '../assets/project-react-jokes.png'
import imgConnect4 from '../assets/project-connect4.png'
import Project from './Project';
import Carousel from "react-elastic-carousel";

const Work = ()=> {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    const addItem = () => {
    const nextItem = Math.max(1, items.length + 1);
    setItems([...items, nextItem]);
    };

    const removeItem = () => {
    const endRange = Math.max(0, items.length - 1);
    setItems(items.slice(0, endRange));
    };

    const projects = [
        {
            img: imgNHLStats,
            name: "NHLStats App",
            description: "This is my Capstone project for Springboard/UMASS Global Software Engineering Bootcamp. This app provides an easy place to look up National Hockey League (NHL) hockey stats, track watched players and teams & playoffs information.",
            tech: "React, React Router, Express, NodeJs, PostgreSQL, NHL API",
            link: "https://nhlstats-app.netlify.app",
            challenges: "When making this project I had to think hard about what data to save to my database versus what data should be retrieved from the NHL API. Along with this other challenges included implementing dynamic CSS styles based on users' favorite team, state management & storing user data."
        },
        {
            img: imgJobly,
            name: "Jobly",
            description: "This was a project for Springboard/UMASS Global Software Engineering Bootcamp curriculum. This is a mock up of a job posting application where users can log in, sign up and apply for jobs. Back end was provided - I was tasked with creating the front-end from scratch using React.",
            tech: "React, React Router, Express, NodeJs, PostgreSQL",
            link: "https://dysfunctional-paste.surge.sh/",
            challenges: "Some of the challenges this project presented was managing user data based on stored token, protecting routes for only logged in users, implementing useContext to manage state, & creating a satisfying search feature using Lodash debounce."
        },
        {
            img: imgHackorSnooze,
            name: "Hack or Snooze",
            description: "In this project, I've built a functional clone of Hacker News, a popular tech news aggregator. The app allows users to create accounts and log in, save their favorite articles & upload stories of their own. This project was to practice using AJAX and APIs along with javascript & CSS.",
            tech: "Javascript, HTML, CSS, AJAX, Axios, 'Hack or Snooze' API",
            link: "https://erichard413.github.io/HackOrSnooze/"
        },
        {
            img: imgReactJokes,
            name: "React Jokes App",
            description: "A joke app where users can vote up or down 5 random jokes & save jokes from ICanHazDadJokeAPI using ReactJS.",
            tech: "React, Axios, ICanHazDadJokeAPI",
            link: "https://erichard413.github.io/react-jokes/"
        },
        {
            img: imgConnect4,
            name: "Connect Four",
            description: "Connect4 is playable with two players. Or just play with yourself, whatever.",
            tech: "Javascript, HTML, CSS",
            link: "https://erichard413.github.io/Connect4/"
        }
    ]
    return (
        <div className="Work section-div">
            <h2>Some things I've built</h2>
            <p>A full collection of projects can be found on my <a href="https://github.com/erichard413" target="_blank">GitHub</a>.
            </p>
            <Carousel itemsToShow={1}>
                            {projects.map((project) => (
                            <Project key={project.name} project={project} />))}
            </Carousel>
        </div>
    )
}

export default Work;