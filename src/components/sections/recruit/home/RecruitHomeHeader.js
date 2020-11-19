import React from "react";
import "./RecruitHomeHeader.css";
import Background from "../../../../images/recruit_home__banner.jpeg";

export default function RecruitHomeHeader() {
  return (
    <section className="recruit-home-header">
      <div className="recruit-home-header__banner">
        <div
          style={{
            background: `transparent url(${Background})`,
            "background-size": `cover`,
            "background-repeat": `no-repeat`,
            "background-position": `94.5% 100% `
          }}
          className="recruit-home-header__img"
        ></div>
        <div className="recruit-home-header__content">
          <h2 style={{ opacity: 1 }} className="recruit-home-header__title">Recruit</h2>
          <p style={{ opacity: 1 }} className="recruit-home-header__description">
          World IT Team は、「チームワーク」を大切にしています。高度IT人材として日本のDXに貢献しましょう。
          </p>
        </div>
      </div>
    </section>
  );
}
