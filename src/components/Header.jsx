import React, { useEffect, useCallback, useRef, useState } from "react";
import "../stylesheets/header.css";
import { SocialIcon } from "react-social-icons";
import erikLogo from "../assets/ER-Logo-White.png";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "../hooks/useThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const titles = [
  "web developer",
  "full stack software engineer",
  "dynamic designer",
  "react developer",
];

const Header = () => {
  const { theme } = useTheme();
  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const strIdxRef = useRef(0);
  const titlesRef = useRef(0);

  const isForwardRef = useRef(true);

  const stringManipulation = useCallback(() => {
    strIdxRef.current =
      isForwardRef.current == true
        ? strIdxRef.current + 1
        : strIdxRef.current - 1;
    if (strIdxRef.current == titles[titlesRef.current].length + 1)
      isForwardRef.current = false;
    if (strIdxRef.current == 0) {
      titlesRef.current =
        titlesRef.current == titles.length - 1 ? 0 : titlesRef.current + 1;
      isForwardRef.current = true;
    }
    setTitle(titles[titlesRef.current].slice(0, strIdxRef.current));
  }, []);

  useEffect(() => {
    const doInterval = setInterval(stringManipulation, 100);
    return () => clearInterval(doInterval);
  }, [stringManipulation]);

  return (
    <div className="Header section-div">
      <div className="logo-div">
        <span id="logo">
          <img src={erikLogo} alt="Erik-Logo" />
        </span>
      </div>
      <div className="name-div">
        <ul>
          <li>Hi, my name is</li>
          <li>Erik Richard</li>
          <li>
            I am a <span id="title">{title}</span>
          </li>
        </ul>
      </div>
      <div className="contact-div">
        <div className="social-btns">
          <SocialIcon
            url="https://www.linkedin.com/in/erik-richard-519a0b21/"
            bgColor="white"
            style={{ height: 30, width: 30, marginLeft: 5 }}
          />

          <SocialIcon
            url="https://github.com/erichard413"
            bgColor="white"
            style={{ height: 30, width: 30, marginLeft: 5 }}
          />
          <SocialIcon
            url="https://www.instagram.com/erikrichard/"
            bgColor="white"
            style={{ height: 30, width: 30, marginLeft: 5 }}
          />
          {/* <SocialIcon
            url="https://twitter.com/erichard413"
            bgColor="white"
            style={{ height: 30, width: 30, marginLeft: 5 }}
          /> */}
          <SocialIcon
            url="mailto:erichard413@outlook.com"
            bgColor="white"
            style={{ height: 30, width: 30, marginLeft: 5 }}
          />
          <div id="gear-div" onClick={() => setIsOpen(s => !s)}>
            <FontAwesomeIcon
              style={{ color: "rgb(128, 128, 128, 0.8)" }}
              icon={faGear}
              className={isOpen ? "rotating" : ""}
            />
          </div>
        </div>
        <div className={`settings-div${isOpen ? "" : " hidden"}`}>
          <p>Theme: {theme == "dark" ? "Dark Mode" : "Light Mode"} </p>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
