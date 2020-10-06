import React from "react";
import "./Footer.css";
import Title from "../common/Title";

export default function Footer({ data }) {
  return (
    <footer className="footer">
      <Title data="WORLD WORKS" />
      <a herf="Info@https://world-works.co.jp" className="footer__link">
        Info@https://world-works.co.jp{" "}
      </a>
      <div className="footer__items">
        <ul>
          <li>
            <a herf="Twitter">Twitter</a>
          </li>
          <li>
            <a herf="Facebook">Facebook</a>
          </li>
          <li>
            <a herf="Instagram">Instagram</a>
          </li>
        </ul>
      </div>
      <p className="footer__description">
        Copyright
        (C)　愛知・岐阜・三重の人材派遣や業務請負など総合人材サービスはワールドグループ
      </p>
    </footer>
  );
}
