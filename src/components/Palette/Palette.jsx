import React from "react";

import Title from "../Title/Title";
import Cards from "../Cards/Cards";
import "./palette.css";

const Palette = () => {
  return (
    <section className="palette">
      <div className="container">
        <Title />
        <Cards />
      </div>
    </section>
  );
};

export default Palette;
