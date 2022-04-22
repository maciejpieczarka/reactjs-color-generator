import React, { useState, useEffect } from "react";

import Card from "../Card/Card";
import HexProvider from "../../utils/HexProvider";
import "./cards.css";

const Cards = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    setColors(HexProvider);
    window.addEventListener("keyup", (e) => {
      if (e.key === " " || e.code == "Space") {
        setColors(HexProvider);
      }
    });
  }, []);

  return (
    <>
      <div className="button-container mobile">
        <button
          className="generate-btn"
          onClick={() => {
            setColors(HexProvider);
          }}
        >
          Generate
        </button>
      </div>
      <div className="card-container">
        {colors.map((color) => (
          <Card color={color} key={color} />
        ))}
      </div>
      <div className="button-container desktop">
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
