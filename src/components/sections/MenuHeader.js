import React from "react";
import "./MenuHeader.css";
import Logo from "../../images/AboutUs/world-logo.png";

export default function MenuHeader(props) {
  return (
    <header className="menu-header">
      <a href="#." className="menu-header__logo">
        <img id="logo" src={Logo} alt="" />
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
            ホーム
          </a>
        </li>
        <li className="menu-header__navigation-item">
          <a className="menu-header__navigation-link" href="#Services">
            サービス
          </a>
        </li>
        <li className="menu-header__navigation-item">
          <a className="menu-header__navigation-link" href="#Technology">
            技術
          </a>
        </li>
        <li className="menu-header__navigation-item">
          <a className="menu-header__navigation-link" href="#AboutUs">
            我のチーム
          </a>
        </li>
      </ul>
    </header>
  );
}
