import React from "react";
import "./PageHeader1.css";
import img from "../../../images/Technology/technology-pageheader.png";
export default function PageHeader() {
  return (
    <section className="tech-page-header">
      <h1 className="tech-page-header__title">技術</h1>
      <div className="tech-page-header__img">
        <img src={img} className="tech-image" />
      </div>
      <p className="tech-page-header__description">
        ITチーム全員が最新のテクノロジーに習熟しています。オープンソース、オープンスタンダードのツールを選択し、持続性の高い開発を実現します。性能や生産性そして品質に違いが出ます
      </p>
    </section>
  );
}
