import React from "react";


const SummeryCard = ({ icon, text, number,color }) => {
  return (
    <div className="summery-card" >
      <div className={`icon-container ${color}`} >{icon}</div>
      <div className="text-container">
        <p className="card-text">{text}</p>
        <p className="card-number">{number}</p>
      </div>
    </div>
  );
};

export default SummeryCard;
