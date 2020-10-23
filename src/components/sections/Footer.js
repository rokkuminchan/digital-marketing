import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer__distributed">
      <div className="footer__left">
        <h3>WORLD WORKS</h3>
        <p className="footer__links">
          <a href="/"> ホーム </a>｜｜<a href="/services">サービス</a>｜｜
          <a href="/technology">技術</a>｜｜
          <a href="/about-us">我々について</a>｜｜{" "}
          <a href="/contact">お問い合わせ</a>
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
        <div className="footer__icons">
          <a href="https://www.facebook.com/worldworks.vietnam">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.facebook.com/worldworks.vietnam">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/worldworks.vietnam">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/worldworks.vietnam">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <p className="footer__copyright">
          Copyright © 2020 by 株式会社ワールド. All rights reserved
        </p>
      </div>
    </footer>
  );
}
