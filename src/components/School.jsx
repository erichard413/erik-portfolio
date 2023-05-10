import React from 'react';
import '../stylesheets/Education.css';

const School = ({school}) => {
    return (
        <div className="Employer">
            <div className="employer-content">
            <h3>{school.name}</h3>    
            <ul>
                <li>{school.date}</li>
                <li className="cert">{school.cert}</li>
                <li>{school.description}</li>
                <li><span className="li-title">Skills:</span> {school.skills}</li>
                {school.credential && <li><span className="li-title">Credential:</span> <a href={school.credential} target="_blank">View</a></li>}
            </ul>
            </div>

        </div>
    )
}

export default School
