import React, {useState} from 'react';
import headshot from '../assets/headshot.jpg'
import Hobby from './Hobby';
import '../stylesheets/About.css';
import erikSkate from '../assets/erik-skate.png'
import erikDG from '../assets/erik-discgolf.png'
import erikHockey from '../assets/erik-hockey.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const About = ()=> {
    const [currHobby, setCurrHobby] = useState(0);
    const hobbies = [
        {
            img: erikSkate,
            name: 'Skateboarding',
            caption: 'Skateboarder of 20+ years, and 0 broken bones!',
            lis: ['Product wear tester for Converse', 'Master of the inward heelflip', 'Link to video reel here']
        },
        {
            img: erikDG,
            name: 'Disc Golf',
            caption: 'I throw frisbees at metal chains for fun',
            lis: ['2 "Hole-in-ones"', 'Under-performs in every tournament', 'PDGA: #196133']   
        },
        {
            img: erikHockey,
            name: 'Hockey',
            caption: 'Huge Boston Bruins fan, decent C-tier beer league player',
            lis: ['Not a total bender', 'Wrist shot could use work', 'Manages fantasy hockey league, but only won once', 'Enjoys watching the Boston Bruins']   
        }
    ]
    const clickRight = () => {
        if (currHobby === hobbies.length -1) {
            setCurrHobby(0);
        } else {
            let nextHobby = currHobby + 1;
            setCurrHobby(nextHobby);
        }
    }
    const clickLeft = () => {
        if (currHobby === 0) {
            setCurrHobby(hobbies.length-1);
        } else {
            let nextHobby = currHobby -1;
            setCurrHobby(nextHobby);
        }
    }
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
                <p>
                    My hobbies include:
                </p>
            </div>
            <div className="hobbies">
                <FontAwesomeIcon id="leftChevron" onClick={clickLeft} icon={faChevronLeft} /> 
                <Hobby hobby={hobbies[currHobby]}/> 
                <FontAwesomeIcon id="rightChevron" onClick={clickRight} icon={faChevronRight} />
            </div>
        </div>
    )
}

export default About;