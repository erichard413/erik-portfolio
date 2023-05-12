import React from 'react';
import '../stylesheets/header.css';
import { SocialIcon } from 'react-social-icons';

const Header = ()=> {
    return (
        <div className="Header section-div">
            <div className="logo-div">
                <span id="logo">ER</span>
            </div>
            <div className="name-div">
                <ul>
                    <li>Hi, my name is:</li>
                    <li>Erik Richard</li>
                    <li>Aspiring web developer</li>
                </ul>
            </div>
            <div className="contact-div">
                <div>
                    <p><span id="connect">Connect: </span>
                    <SocialIcon url="https://www.linkedin.com/in/erik-richard-519a0b21/" bgColor="white" style={{height: 30, width: 30, marginLeft: 5}} />
                    <SocialIcon url="https://www.instagram.com/erikrichard/" bgColor="white" style={{height: 30, width: 30, marginLeft: 5}} />
                    <SocialIcon url="https://github.com/erichard413" bgColor="white" style={{height: 30, width: 30, marginLeft: 5}} />
                    <SocialIcon url="https://twitter.com/erichard413" bgColor="white" style={{height: 30, width: 30, marginLeft: 5}} />
                    <SocialIcon url="mailto:erichard413@outlook.com" bgColor="white" style={{height: 30, width: 30, marginLeft: 5}} />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header;