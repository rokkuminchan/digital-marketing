import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaFax,
  FaMapMarker,
  FaPhone,
} from "react-icons/fa";

import ALink from "../common/ALink";
import "./Footer.css";
import {useTranslation} from 'react-i18next';

export default function Footer() {
  const {t} = useTranslation();
  return (
    <footer className="footer__distributed">
      <div className="footer__left">
        <h3>WORLD IT TEAM</h3>
        <p className="footer__links">
          <ALink exact to="/" activeClassName="active">
            {' '}
            {t('menu-header__home')}{' '}
          </ALink>
          ｜｜
          <ALink exact to="/services" activeClassName="active">
            {t('menu-header__service')}
          </ALink>
          ｜｜
          <ALink exact to="/technology" activeClassName="active">
            {t('menu-header__technology')}
          </ALink>
          ｜｜
          <ALink exact to="/about-us" activeClassName="active">
            {t('menu-header__about-us')}
          </ALink>
          ｜｜
          <ALink exact to="/recruit" activeClassName="active">
            {t('menu-header__recruit')}
          </ALink>
          ｜｜
          <ALink exact to="/contact" activeClassName="active">
            {t('menu-header__contact')}
          </ALink>
        </p>
      </div>

      <div className="footer__center">
        <div className="footer__company-info-row">
          <div className="footer__company-info-icon">
            <FaMapMarker size={16} />
          </div>
          <p>
            <span>〒500-8856</span>
            {t('footer__address')}
          </p>
        </div>

        <div className="footer__company-info-row">
          <div className="footer__company-info-icon">
            <FaPhone size={16} />
          </div>
          <p>TEL 058-255-3066</p>
        </div>

        <div className="footer__company-info-row">
          <div className="footer__company-info-icon">
            <FaFax size={16} />
          </div>
          <p>FAX 058-255-3633</p>
        </div>
      </div>

      <div className="footer__right">
        <div className="footer__icons">
          <a
            href="https://www.facebook.com/worldworks.vietnam"
            target="_blank"
            className="footer__icon-fb" rel="noopener"
          >
            <FaFacebookF className="footer__icon" />
          </a>
          <a
            href="https://twitter.com/world_recruit"
            target="_blank"
            className="footer__icon-tw" rel="noopener"
          >
            <FaTwitter className="footer__icon" />
          </a>
          <a
            href="https://www.instagram.com/world_recruit/"
            target="_blank"
            className="footer__icon-ins" rel="noopener"
          >
            <FaInstagram className="footer__icon" /> 
          </a>
        </div>
        <p className="footer__copyright">
          Copyright © 2020 by 株式会社ワールド. All rights reserved
        </p>
      </div>
    </footer>
  );
}
