import React from 'react';
import '../stylesheets/Experience.css';

const Employer = ({employer}) => {
    return (
        <div className="Employer">
            <div className="employer-content">
            <h3>{employer.title} <span className="at-sign">@</span> {employer.name}</h3>    
            <ul>
                <li>{employer.dates}</li>
                <li>{employer.description}</li>
                <li><span className="li-title">Responsibilities:</span>
                    <ul>
                       {employer.tasks.map(task => (<li>{task}</li>))} 
                    </ul>
                </li>
            </ul>
            </div>

        </div>
    )
}

export default Employer