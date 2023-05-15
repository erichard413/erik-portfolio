import React, {useState} from 'react';
import headshot from '../assets/headshot.jpg'
import Hobby from './Hobby';
import '../stylesheets/About.css';
import erikSkate from '../assets/erik-skate.png'
import erikDG from '../assets/erik-discgolf.png'
import erikHockey from '../assets/erik-hockey.png'
import Carousel from "react-elastic-carousel";

const About = ()=> {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    const addItem = () => {
    const nextItem = Math.max(1, items.length + 1);
    setItems([...items, nextItem]);
    };

    const removeItem = () => {
    const endRange = Math.max(0, items.length - 1);
    setItems(items.slice(0, endRange));
    };
    
    const hobbies = [
        {
            img: erikDG,
            name: 'Disc Golf',
            caption: 'I throw frisbees at metal chains for fun',
            lis: ['3 "Hole-in-ones"', 'Under-performs in every tournament', <a href="https://www.pdga.com/player/196133" target="_blank">PDGA#: 196133</a>]   
        },
        {
            img: erikSkate,
            name: 'Skateboarding',
            caption: 'Skateboarder of 20+ years, and 0 broken bones!',
            lis: ['Product wear tester for Converse', 'Master of the inward heelflip', <a href="https://youtu.be/-82xrhWx6_4" target="_blank">Video Reel</a>]
        },
        {
            img: erikHockey,
            name: 'Hockey',
            caption: 'Huge Boston Bruins fan, decent C-tier beer league player',
            lis: ['Not a total bender', 'Wrist shot could use work', 'Manages fantasy hockey league, but only won once', 'Enjoys watching the Boston Bruins']   
        }
    ]

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
                    Fast forward to today, I've worked with basic HTML & CSS while designing landing pages & email campaigns in a marketing role for years. I knew that I wanted to learn how to do more. I've always been fascinated by technology & computer science, so I decided to jump in head first and joined an intensive 9 month software engineering boot camp.
                </p>
                <h3>
                    My hobbies include:
                </h3>
            </div>
            <div className="hobbies">
                    <div className="hobbies-container">
                         <Carousel itemsToShow={1}>
                            {hobbies.map((hobby) => (
                            <Hobby key={hobby.name} hobby={hobby} />))}
                        </Carousel>
                    </div>
                </div>
        </div>
    )
}

export default About;