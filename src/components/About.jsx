import React, { useState, useRef } from "react";
import headshot from "../assets/headshot.jpg";
import Hobby from "./Hobby";
import "../stylesheets/About.css";
import erikSkate from "../assets/erik-skate.png";
import erikDG from "../assets/erik-discgolf.png";
import erikHockey from "../assets/erik-hockey.png";
import Carousel from "react-elastic-carousel";
import { useTheme } from "../hooks/useThemeContext.jsx";
import StackIcon from "tech-stack-icons";

const About = () => {
  const { theme } = useTheme();
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const isHovered = useRef(false);

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
      name: "Disc Golf",
      caption: "I throw frisbees at metal chains for fun",
      lis: [
        '3 "Hole-in-ones"',
        "Under-performs in every tournament",
        <a href="https://www.pdga.com/player/196133" target="_blank">
          PDGA#: 196133
        </a>,
      ],
    },
    {
      img: erikSkate,
      name: "Skateboarding",
      caption: "Skateboarder of 20+ years, and 0 broken bones!",
      lis: [
        "Product wear tester for Converse",
        "Master of the inward heelflip",
        <a href="https://youtu.be/-82xrhWx6_4" target="_blank">
          Video Reel
        </a>,
      ],
    },
    {
      img: erikHockey,
      name: "Hockey",
      caption: "Huge Boston Bruins fan, decent C-tier beer league player",
      lis: [
        "Not a total bender",
        "Wrist shot could use work",
        "Manages fantasy hockey league, but only won once",
        "Enjoys watching the Boston Bruins",
      ],
    },
  ];
  console.log("re-render");
  return (
    <div className={`About ${theme} section-div`}>
      <h2>About Me</h2>

      <div className="about-content">
        <div className="about-image">
          <img src={headshot} />
        </div>
        <p>
          Hello! My name is Erik and I'm an experienced Web Developer &
          Marketing Coordinator. My interest in programming can be traced back
          to 2003, when I taught myself the basics of HTML & CSS to make
          websites to share photos of my friends and I skateboarding. Though the
          websites were very rudimentary it gave me a solid understanding of how
          browsers render web pages.
          <br></br>
          <br></br>
          Having enrolled in Springboard's Software Engineering Career Track
          program through the University of Massachusetts I was able to elevate
          my software engineering skills to produce full-stack, interactive &
          dynamic web applications. Since graduating the program I have worked
          on several full-stack personal projects & had obtained multiple
          certifications to expand on my knowledge while volunteering my time to
          help to fellow students currently enrolled in the Springboard program
          through their Slack channel.
        </p>
        {/* <h3>My hobbies include:</h3>
      </div>
      <div className="hobbies">
        <div className="hobbies-container">
          <Carousel itemsToShow={1}>
            {hobbies.map(hobby => (
              <Hobby key={hobby.name} hobby={hobby} />
            ))}
          </Carousel>
        </div> */}
      </div>
      <div className="tech-stack">
        <h3>My Tech Stack Includes:</h3>
        <div className="tech-stack-icons">
          <StackIcon name="reactjs" />
          <StackIcon name="vitejs" />
          <StackIcon name="postgresql" />
          <StackIcon name="nodejs" />
          <StackIcon name="js" />
          <StackIcon name="typescript" />
          <StackIcon name="python" />
          <StackIcon name="html5" />
          <StackIcon name="css3" />
        </div>
      </div>
    </div>
  );
};

export default About;
