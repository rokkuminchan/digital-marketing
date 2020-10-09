import React from "react";
import "./Footer.css";
import Title from "../common/Title";

export default function Footer({ data }) {
  return (
    <footer className="footer">
      <Title data="WORLD WORKS" />
      <div>
        <a herf="Info@https://world-works.co.jp" className="footer__link">
          Info@https://world-works.co.jp
        </a>
      </div>

      <div className="footer__address">
        <p>住所:</p>
        <p>電話番号:</p>
        <p>ＦＡＸ:</p>
      </div>
      <div className="footer__address-a">
        <p>〒500-8856 岐阜県岐阜市橋本町2-8 濃飛ニッセイビル6階</p>
        <p>058-255-3066</p>
        <p>058-255-3633</p>
      </div>

      <div className="footer__items">
        <a herf="Twitter" className="footer__items">
          Twitter
        </a>
        <a herf="Facebook" className="footer__items">
          Facebook
        </a>
        <a herf="Instagram" className="footer__items">
          Instagram
        </a>
      </div>

      <p className="footer__description">
        Copyright
        (C)　愛知・岐阜・三重の人材派遣や業務請負など総合人材サービスはワールドグループ
      </p>
    </footer>
  );
}