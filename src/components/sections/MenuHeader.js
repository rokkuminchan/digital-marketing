import React from "react";
import "./MenuHeader.css";

export default function MenuHeader(props) {
  return (
    <header class="menu-header">
      <a href="#." class="menu-header__logo">
        World logo
      </a>
      <input
        class="menu-header__visibility-btn"
        type="checkbox"
        id="menu-btn"
      />
      <label class="menu-header__icon" for="menu-btn">
        <span class="menu-header__navicon"></span>
      </label>
      <ul class="menu-header__navigation">
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
