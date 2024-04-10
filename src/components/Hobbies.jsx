import Carousel from "react-elastic-carousel";
import Hobby from "./Hobby";
import erikSkate from "../assets/erik-skate.png";
import erikDG from "../assets/erik-discgolf.png";
import erikHockey from "../assets/erik-hockey.png";
import "../stylesheets/Hobbies.css";

const hobbies = [
  {
    img: erikDG,
    name: "Disc Golf",
    caption: "I throw frisbees at metal chains for fun",
    lis: [
      '4 "Hole-in-ones"',
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
      "Product wear tester for Converse Shoes",
      "Self described master of the inward heelflip",
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

export default function Hobbies({ theme }) {
  return (
    <div className={`Hobbies section-div ${theme}`}>
      <h2>Hobbies</h2>
      <p>
        <span className="italic">
          "A hobby is a happy medium between a passion and a monomania."
        </span>{" "}
        - Honore De Balzac
      </p>
      <div className="hobbies">
        <div className="hobbies-container">
          <Carousel itemsToShow={1}>
            {hobbies.map(hobby => (
              <Hobby key={hobby.name} hobby={hobby} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
