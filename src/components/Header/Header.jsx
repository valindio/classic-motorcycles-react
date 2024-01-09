import { useState } from "react";

import Section from "../Section/Section";
import HeaderContent from "./HeaderContent";

import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);

  function handleShowMenu() {
    setShow(!show);
  }

  return (
    <header className="header" id="home">
      <nav>
        <div className="nav__bar">
          <div className="nav__logo">
            <img src="/src/assets/logo.png" alt="Logo" />
          </div>
          <div
            onClick={handleShowMenu}
            className="nav__menu__btn"
            id="menu-btn"
          >
            <i className="ri-menu-line"></i>
          </div>
        </div>
        <ul className={show ? "nav__links display" : "nav__links"}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#ourteam">Our Team</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li className="nav__logo">
            <a href="#home">
              <img src="/src/assets/logo.png" alt="Logo" />
            </a>
          </li>
          <li>
            <a href="#feature">Feature</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Section forSection={"header__container"}>
        <HeaderContent />
      </Section>
    </header>
  );
};

export default Header;
