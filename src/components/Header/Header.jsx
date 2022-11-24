import React, { useState } from "react";

import Logo from "../../assets/images/Logo.svg";
import { MenuIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";
import "./header.css";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const openNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header className={navActive ? "active" : ""}>
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
                href="https://maciejpieczarka.tech/"
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
        <MenuIcon className="hamburger-icon open" onClick={openNav} />
        <XIcon className="hamburger-icon close" onClick={openNav} />
      </div>
    </header>
  );
};

export default Header;
