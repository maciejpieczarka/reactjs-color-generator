import React from "react";
import { toast } from "react-toastify";

import "./card.css";

const Card = ({ color }) => {
  const copy = (color) => {
    toast.success(`Copied color ${color} to clipboard!`, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigator.clipboard.writeText(color);
  };

  return (
    <div className="card" onClick={() => copy(color)}>
      <div className="color-box" style={{ backgroundColor: color }}></div>
      <div className="hex-box">{color}</div>
    </div>
  );
};

export default Card;
