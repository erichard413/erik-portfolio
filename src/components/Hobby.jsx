import React from 'react';
import '../stylesheets/Hobby.css';

const Hobby = ({hobby}) => {
    return (
        <div className="Hobby">
            <h3>{hobby.name}</h3>
            <div className="Hobby-img">
                <img src={hobby.img} alt="skateboarding" />
            </div>
            <div className="Hobby-info">
                <p>{hobby.caption}</p>
                    <ul>
                        {hobby.lis.map(li => (<li>
                        {li}
                    </li>))}
                    </ul>    
            </div>

        </div>
    )
}

export default Hobby