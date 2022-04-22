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
          <a
            href="https://github.com/maciejpieczarka"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/pieczareq_/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/maciej-pieczarka-2311821a4/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="copyrights">&copy;2022 | Maciej Pieczarka</p>
      </div>
    </footer>
  );
};

export default Footer;
