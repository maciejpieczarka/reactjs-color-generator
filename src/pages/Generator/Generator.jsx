import React from "react";

import Header from "../../components/Header/Header";
import Palette from "../../components/Palette/Palette";
import Footer from "../../components/Footer/Footer";
import Pencil from "../../assets/images/Pencil.png";
import PaletteImg from "../../assets/images/Color Palette.png";
import "./generator.css";

const Generator = () => {
  return (
    <div className="generator">
      <Header />
      <Palette />
      <Footer />
      <img
        src={Pencil}
        alt="Background Pencil"
        className="absoluteImg pencilImg"
      />
      <img
        src={PaletteImg}
        alt="Background Palette"
        className="absoluteImg paletteImg"
      />
    </div>
  );
};

export default Generator;
