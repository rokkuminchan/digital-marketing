import React from "react";
import "./PageHeader.css";
import Background from "../../../images/aboutus__page-header.jpg";
import { useTranslation } from "react-i18next";

export default function PageHeader({ data }) {
  const {t}= useTranslation();
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
          <h2 className="page-header__title">{t(data.title)}</h2>
          <p className="page-header__description">
          {t(data.description)}
          </p>
        </div>
      </div>
      <div className="page-header__sub-description-wrapper">
        <p className="page-header__sub-description">
        {t(data.subDescription)}
        </p>
      </div>
    </section>
  );
}
