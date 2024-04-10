import React from "react";
import "../stylesheets/Hobby.css";

const Hobby = ({ hobby }) => {
  return (
    <div className="Hobby">
      <h3>{hobby.name}</h3>
      <div className="Hobby-img">
        <img src={hobby.img} alt={hobby.name} />
      </div>
      <div className="Hobby-info">
        <p>{hobby.caption}</p>
        <div className="Hobby-list">
          <ul>
            {hobby.lis.map(li => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
