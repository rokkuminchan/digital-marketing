import React from "react";
import { FaFacebookF,FaFax, FaMapMarker, FaPhone } from 'react-icons/fa';

import ALink from "../common/ALink";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer__distributed">
      <div className="footer__left">
        <h3>WORLD IT TEAM</h3>
        <p className="footer__links">
          <ALink exact to="/" activeClassName="active"> ホーム </ALink>｜｜
          
          <ALink exact to="/services" activeClassName="active">サービス</ALink>
          ｜｜
          <ALink exact to="/technology" activeClassName="active">技術</ALink>｜｜
          <ALink exact to="/about-us" activeClassName="active">我々について</ALink>｜｜
          <ALink exact to="/contact" activeClassName="active">お問い合わせ</ALink>
        </p>
      </div>

      <div className="footer__center">
        <div className="footer__company-info-row">
          <div className="footer__company-info-icon">
            <FaMapMarker size={16}/>
          </div>
          <p>
            <span>〒500-8856</span>
            岐阜県岐阜市橋本町2-8 濃飛ニッセイビル6階
          </p>
        </div>

        <div className="footer__company-info-row">
          <div className="footer__company-info-icon">
            <FaPhone size={16}/>
          </div>
          <p>TEL 058-255-3066</p>
        </div>

        <div className="footer__company-info-row">
          <div className="footer__company-info-icon">
            <FaFax size={16}/>
          </div>
          <p>FAX 058-255-3633</p>
        </div>
      </div>

      <div className="footer__right">
        <div className="footer__icons">
          <a href="https://www.facebook.com/worldworks.vietnam">
            <FaFacebookF className="footer__facebook-icon"/>
          </a>
        </div>
        <p className="footer__copyright">
          Copyright © 2020 by 株式会社ワールド. All rights reserved
        </p>
      </div>
    </footer>
  );
}
