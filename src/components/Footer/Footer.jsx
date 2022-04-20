import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-media-links">
          <a href="/" className="link">
            <FaGithub />
          </a>
          <a href="/" className="link">
            <FaInstagram />
          </a>
          <a href="/" className="link">
            <FaLinkedin />
          </a>
        </div>

        <p className="copyrights">&copy;2022 | Maciej Pieczarka</p>
      </div>
    </footer>
  );
};

export default Footer;
