import React from "react";
import ALink from "../common/ALink";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer__distributed">
      <div className="footer__left">
        <h3>WORLD IT TEAM</h3>
        <p className="footer__links">
          <ALink to="/"> ホーム </ALink>｜｜
          <ALink to="/services">サービス</ALink>
          ｜｜
          <ALink to="/technology">技術</ALink>｜｜
          <ALink to="/about-us">我々について</ALink>｜｜
          <ALink to="/contact">お問い合わせ</ALink>
        </p>
      </div>

      <div className="footer__center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>〒500-8856</span>
            岐阜県岐阜市橋本町2-8 濃飛ニッセイビル6階
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>TEL 058-255-3066</p>
        </div>

        <div>
          <i className="fa fa-fax"></i>
          <p>FAX 058-255-3633</p>
        </div>
      </div>

      <div className="footer__right">
        <p className="footer__copyright">
          Copyright © 2020 by 株式会社ワールド. All rights reserved
        </p>
      </div>
    </footer>
  );
}
