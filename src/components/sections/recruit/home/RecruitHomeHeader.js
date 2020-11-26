import React from "react";
import "./RecruitHomeHeader.css";
import { useTranslation } from "react-i18next";
import Background from "../../../../images/recruit_home__banner.jpeg";

export default function RecruitHomeHeader({ data }) {
  const { t } = useTranslation();
  return (
    <section className="recruit-home-header">
      <div className="recruit-home-header__banner">
        <div
          style={{
            background: `transparent url(${Background})`,
            "background-size": `cover`,
            "background-repeat": `no-repeat`,
            "background-position": `94.5% `,
          }}
          className="recruit-home-header__img"
        ></div>
        <div className="recruit-home-header__content">
          <h2 className="recruit-home-header__title">{t(data.title)}</h2>
          <p className="recruit-home-header__description">
            {t(data.description)}
          </p>
        </div>
      </div>
    </section>
  );
}
