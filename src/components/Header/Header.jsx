import React from "react";

import Logo from "../../assets/images/Logo.svg";
import { MenuIcon } from "@heroicons/react/solid";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        {/* Logo */}
        <a
          href="https://maciejpieczarka.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Logo} alt="Logo-Img" className="logo" />
        </a>

        {/* Navigation */}
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <a
                href="https://maciejpieczarka.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                My Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://ko-fi.com/pieczareq"
                target="_blank"
                rel="noreferrer"
              >
                <button className="nav-btn">Support Me</button>
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger icon */}
        <MenuIcon className="hamburger-icon" />
      </div>
    </header>
  );
};

export default Header;
