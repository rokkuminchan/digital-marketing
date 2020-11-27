import React from "react";
import Image from "../../common/Image";
import "./ServicePageHeader.css";
import { useTranslation } from "react-i18next";

export default function SerivePageHeader({ data }) {
  const { t } = useTranslation();
  return (
    <section className="service-page-header">
      <div className="service-page-header__content">
        <h2 className="service-page-header__title">{t(data.title)}</h2>
        <p className="service-page-header__description">
          {t(data.description)}
        </p>
      </div>

      <Image className="service-page-header__img" {...data.image} />
      
      <div className="service-page-header__sub-description-wrapper">
        <p className="service-page-header__sub-description">
          {t(data.subDescription)}
        </p>
      </div>
    </section>
  );
}
