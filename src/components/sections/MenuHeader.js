import React from "react";
import "./MenuHeader.css";
import Logo from "../../images/world-logo.jpg";
import ALink from "../common/ALink";
import LanguageSwitcher from "../common/LanguageSwitcher";

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
          <ALink
            className="menu-header__navigation-link"
            exact
            to="/"
            activeClassName="active"
          >
            ホーム
          </ALink>
        </li>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <ALink
            className="menu-header__navigation-link"
            exact
            to="/services"
            activeClassName="active"
          >
            サービス
          </ALink>
        </li>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <ALink
            className="menu-header__navigation-link"
            exact
            to="/technology"
            activeClassName="active"
          >
            技術
          </ALink>
        </li>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <ALink
            className="menu-header__navigation-link"
            exact
            to="/about-us"
            activeClassName="active"
          >
            我々について
          </ALink>
        </li>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <ALink
            className="menu-header__navigation-link"
            exact
            to="/recruit"
            activeClassName="active"
          >
            採用
          </ALink>
        </li>
        <li className="menu-header__navigation-item" onClick={hideMenu}>
          <ALink
            className="menu-header__navigation-link"
            exact
            to="/contact"
            activeClassName="active"
          >
            お問い合わせ
          </ALink>
        </li>
        <li className="menu-header__navigation-item">
          <div className="menu-header__navigation-link">
            <LanguageSwitcher />
          </div>
        </li>
      </ul>
    </header>
  );
}
