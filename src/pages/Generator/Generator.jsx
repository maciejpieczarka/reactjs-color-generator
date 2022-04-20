import React from "react";

import Header from "../../components/Header/Header";
import Palette from "../../components/Palette/Palette";
import Footer from "../../components/Footer/Footer";
import "./generator.css";

const Generator = () => {
  return (
    <div className="generator">
      <Header />
      <Palette />
      <Footer />
    </div>
  );
};

export default Generator;
