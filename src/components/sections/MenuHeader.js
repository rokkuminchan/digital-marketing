import React from "react";
import "./MenuHeader.css";
import Logo from "../../img/AboutUs/world-logo.png";

const menuClass = "menu-header__navigation";
const menuExpandClass = "menu-header__navigation--expand";

export default function MenuHeader() {
  function toggleMenu() {
    const menu = document.querySelector(`.${menuClass}`);
    menu.classList.contains(menuExpandClass)
      ? menu.classList.remove(menuExpandClass)
      : menu.classList.add(menuExpandClass);
  }

  function hideMenu() {
    const menu = document.querySelector(`.${menuClass}`);

    if (menu.classList.contains(menuExpandClass)) {
      menu.classList.remove(menuExpandClass);
    }
  }

  return (
    <header className="menu-header">
      <a href="#." className="menu-header__logo">
        <img src={Logo} alt="" id="logo"></img>
      </a>
      <input
        className="menu-header__visibility-btn"
        onClick={toggleMenu}
        type="checkbox"
        id="menu-btn"
      />
      <label className="menu-header__icon" htmlFor="menu-btn">
        <span className="menu-header__navicon"></span>
      </label>
      <ul className={menuClass}>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <a className="menu-header__navigation-link" href="#Home">
            ホーム
          </a>
        </li>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <a className="menu-header__navigation-link" href="#Services">
            サービス
          </a>
        </li>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <a className="menu-header__navigation-link" href="#Technology">
            技術
          </a>
        </li>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <a className="menu-header__navigation-link" href="#AboutUs">
            我のチーム
          </a>
        </li>
      </ul>
    </header>
  );
}
