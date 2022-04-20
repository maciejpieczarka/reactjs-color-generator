import React from "react";

import "./title.css";

const Title = () => {
  return (
    <div className="title-box">
      <div className="line"></div>
      <div className="text-box">
        <h1 className="title-heading">Color Palette Generator</h1>
        <h3 className="title-description">
          Click individual color to copy the HEX value
        </h3>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Title;
