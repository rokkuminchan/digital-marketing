import React from "react";
import "./MenuHeader.css";
import Logo from "../../images/world-logo.png";
import { Link } from "gatsby";

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
      <Link to="/" className="menu-header__logo">
        <img src={Logo} alt="" id="logo" />
      </Link>
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
          <Link className="menu-header__navigation-link" to="/">
            ホーム
          </Link>
        </li>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <Link className="menu-header__navigation-link" to="/services">
            サービス
          </Link>
        </li>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <Link className="menu-header__navigation-link" to="/technology">
            技術
          </Link>
        </li>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <Link className="menu-header__navigation-link" to="/about-us">
            我々について
          </Link>
        </li>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <Link className="menu-header__navigation-link" to="/contact">
            お問い合わせ
          </Link>
        </li>
      </ul>
    </header>
  );
}
