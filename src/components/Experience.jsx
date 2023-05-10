import React from 'react';
import '../stylesheets/Experience.css';
import Employer from './Employer';

const Experience = ()=> {
    const jobs = [{
        name: 'Convenient Cards',
        title: 'Marketing Coordinator',
        description: 'Convenient Cards, Inc. is a leading provider of prepaid card programs for community banks and Native American tribes.',
        dates: 'January 2015 - Present',
        tasks: ['Facilitating the planning and implementation of marketing initiatives', 'Creating digital marketing content such as landing pages, email marketing & social media content', 'Planning logistics, campaigns & tradehows']
    },
    {
        name: 'Herb Chambers',
        title: 'Internet Marketing Specialist',
        description: 'Car dealerships located in the greater Boston, MA area.',
        dates: 'May 2014 - November 2014',
        tasks: ['Broadcasted consistent marketing message to drive web traffic', 'Photographed cars for website listings', 'Wrote compelling write ups for car listings on website', 'Designed, planned & implemented email marketing'] 
    }
    ]
    return (
        <div className="Experience section-div">
            <h2>Where I've Worked</h2>
            {jobs.map(job => (<Employer employer={job} />))}
        </div>
    )
}

export default Experience;