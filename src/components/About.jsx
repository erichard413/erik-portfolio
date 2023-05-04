import React from 'react';
import headshot from '../assets/headshot.jpg'
import '../stylesheets/About.css';


const About = ()=> {
    return (
        <div className="About section-div">
            <div className="about-image">
                <img src={headshot} />    
            </div>
            <div className="about-content">
                <h2>About Me</h2>
                <p>
                    Hello! My name is Erik and I'm a recent software engineering bootcamp graduate. My interest in computer programming can be traced back to 2003, when I taught myself the basics of HTML & CSS to make websites to share pictures of my friends and I skateboarding. Though the websites were very rudimentary it gave me a solid understanding of how browsers render web pages. 
                </p>
                <p>
                    Fast forward to today, I've worked with basic HTML & CSS while designing landing pages & email campaigns in a marketing role for years. I knew that I wanted to learn how to do more. With a love for techy things I felt drawn to learn software engineering - with a focus on front end technology like Javascript & React.
                </p>
            </div>
        </div>
    )
}

export default About;