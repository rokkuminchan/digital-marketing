import React from "react";
import "./DirectorPageHeader.css";
import Background from "../../../../images/recuit__director.jpg";

export default function PageHeader() {
  return (
    <section className="page-header">
      <div className="page-header__banner">
        <div
          style={{
            background: `transparent url(${Background})`,
            "background-size": `cover`,
            "background-repeat": `no-repeat`,
            "background-position": `center center`
          }}
          className="page-header__img"
        ></div>
        <div className="page-header__content">
          <h2 className="page-header__title"></h2>
          <p className="page-header__description">
        
          </p>
        </div>
      </div>
      <div className="page-header__sub-description-wrapper">
        <p className="page-header__sub-description">
          高度IT人材として日本のDXに貢献するために、普通の日本人と同じように、日本語の読み書きや会話ができ、日本の文化を理解し、尊重し、日本人の働き方を学んでいます。
          また、最新のIT技術を学び、仕事に役立つシステムを設計・実装します
        </p>
      </div>
    </section>
  );
}
