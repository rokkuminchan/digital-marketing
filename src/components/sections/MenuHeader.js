import React from "react";
import "./MenuHeader.css";
import Logo from "../../images/world-logo.png";
import ALink from "../common/ALink";

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
      <ALink to="/" className="menu-header__logo">
        <img src={Logo} alt="" id="logo" />
      </ALink>
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
          <ALink className="menu-header__navigation-link" to="/">
            ホーム
          </ALink>
        </li>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <ALink className="menu-header__navigation-link" to="/services">
            サービス
          </ALink>
        </li>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <ALink className="menu-header__navigation-link" to="/technology">
            技術
          </ALink>
        </li>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <ALink className="menu-header__navigation-link" to="/about-us">
            我々について
          </ALink>
        </li>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <ALink className="menu-header__navigation-link" to="/contact">
            お問い合わせ
          </ALink>
        </li>
      </ul>
    </header>
  );
}
