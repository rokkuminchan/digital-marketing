import React from "react";
import "./MenuHeader.css";

export default function MenuHeader(props) {
  return (
    <header className="menu-header">
      <a href="#." className="menu-header__logo">
        World logo
      </a>
      <input
        className="menu-header__visibility-btn"
        type="checkbox"
        id="menu-btn"
      />
      <label className="menu-header__icon" htmlFor="menu-btn">
        <span className="menu-header__navicon"></span>
      </label>
      <ul className="menu-header__navigation">
        <li className="menu-header__navigation-item">
          <a className="menu-header__navigation-link" href="#Home">
            Home
          </a>
        </li>
        <li className="menu-header__navigation-item">
          <a className="menu-header__navigation-link" href="#Services">
            Services
          </a>
        </li>
        <li className="menu-header__navigation-item">
          <a className="menu-header__navigation-link" href="#Technology">
            Technology
          </a>
        </li>
        <li className="menu-header__navigation-item">
          <a className="menu-header__navigation-link" href="#AboutUs">
            About us
          </a>
        </li>
      </ul>
    </header>
  );
}
