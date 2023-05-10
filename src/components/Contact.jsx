import React from 'react';
import '../stylesheets/Contact.css';

const Contact = ()=> {
    return (
        <div className="Contact section-div">
            <h2>Get in Touch</h2>
            <div className="Contact-content">
            <p>I am currently looking for new opportunities! My inbox is always open. Feel free to send me an email.
            </p>
            <p>
                <a href="mailto:erichard413@outlook.com">
                <div className="Contact-Box">
                    Email Me
                </div>  
            </a>   
            </p>  
            </div>
        </div>
    )
}

export default Contact;