import React from "react";
import "./MenuHeader.css";
import Logo from "../../images/world-logo.jpg";
import ALink from "../common/ALink";
import LanguageSwitcher from "../common/LanguageSwitcher";
import {useTranslation} from 'react-i18next';

const menuClass = "menu-header__navigation";
const menuExpandClass = "menu-header__navigation--expand";

export default function MenuHeader() {
  const {t} = useTranslation();
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
      <div className= "menu-header__content-left">
        <ALink to="/" className="menu-header__logo">
          <img src={Logo} alt="" id="logo" />
        </ALink>
      </div>

      <div className="menu-header__content-right">
            <div className="menu-header__content-item">
              
              <ul className={menuClass}>
                <li className="menu-header__navigation-item" onClick={hideMenu}>
                  <ALink
                    className="menu-header__navigation-link"
                    exact
                    to="/"
                    activeClassName="active"
                  >
                    {t('menu-header__home')}
                  </ALink>
                </li>
                <li className="menu-header__navigation-item" onClick={hideMenu}>
                  <ALink
                    className="menu-header__navigation-link"
                    exact
                    to="/services"
                    activeClassName="active"
                  >
                    {t('menu-header__service')}
                  </ALink>
                </li>
                <li className="menu-header__navigation-item" onClick={hideMenu}>
                  <ALink
                    className="menu-header__navigation-link"
                    exact
                    to="/technology"
                    activeClassName="active"
                  >
                    {t('menu-header__technology')}
                  </ALink>
                </li>
                <li className="menu-header__navigation-item" onClick={hideMenu}>
                  <ALink
                    className="menu-header__navigation-link"
                    exact
                    to="/about-us"
                    activeClassName="active"
                  >
                    {t('menu-header__about-us')}
                  </ALink>
                </li>
                <li className="menu-header__navigation-item" onClick={hideMenu}>
                  <ALink
                    className="menu-header__navigation-link"
                    exact
                    to="/recruit"
                    activeClassName="active"
                  >
                    {t('menu-header__recruit')}
                  </ALink>
                </li>
                <li className="menu-header__navigation-item" onClick={hideMenu}>
                  <ALink
                    className="menu-header__navigation-link"
                    exact
                    to="/contact"
                    activeClassName="active"
                  >
                    {t('menu-header__contact')}
                  </ALink>
                </li>
              </ul>
            </div>

            <div className="menu-header__content-item">
              <div className="menu-header__Language">
                <LanguageSwitcher  onAfterChangeLanguage={hideMenu} />
              </div>
            </div>  

            <div className="menu-header__content-item">
            <label className="menu-header__icon" htmlFor="menu-btn">
                <span className="menu-header__navicon"></span>
              </label>
              <input
                  className="menu-header__visibility-btn"
                  onClick={toggleMenu}
                  type="checkbox"
                  id="menu-btn"
                />
            </div>

              
      </div> 

        
    </header>
  );
}
