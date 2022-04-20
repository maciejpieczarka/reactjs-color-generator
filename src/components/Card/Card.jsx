import React from "react";

import "./card.css";

const Card = ({ color }) => {
  return (
    <div className="card">
      <div className="color-box" style={{ backgroundColor: color }}></div>
      <div className="hex-box">{color}</div>
    </div>
  );
};

export default Card;
