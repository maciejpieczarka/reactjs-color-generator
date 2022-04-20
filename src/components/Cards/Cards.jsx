import React, { useState, useEffect } from "react";

import Card from "../Card/Card";
import HexProvider from "../../utils/HexProvider";
import "./cards.css";

const Cards = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    setColors(HexProvider);
    window.addEventListener("keydown", (e) => {
      if (e.key === " ") {
        setColors(HexProvider);
      }
    });
  }, []);

  return (
    <>
      <div className="card-container">
        {colors.map((color) => (
          <Card color={color} key={color} />
        ))}
      </div>
      <div className="button-container">
        <button
          className="generate-btn"
          onClick={() => {
            setColors(HexProvider);
          }}
        >
          Generate palette
        </button>

        {/* Description under the button */}

        <p className="generate-description">Or just press “Spacebar”</p>
      </div>
    </>
  );
};

export default Cards;
