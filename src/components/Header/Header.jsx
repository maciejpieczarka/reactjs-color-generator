import React from "react";

import Logo from "../../assets/images/Logo.svg";
import { MenuIcon } from "@heroicons/react/solid";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        {/* Logo */}
        <a href="/">
          <img src={Logo} alt="Logo-Img" className="logo" />
        </a>

        {/* Navigation */}
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/">My Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="/">
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
