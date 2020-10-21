import React from "react";
import Image from "../../common/Image";
import "./ServicePageHeader.css";

export default function SerivePageHeader({ data }) {
  return (
    <section className="service-page-header">
      <div className="service-page-header__content">
        <h2 className="service-page-header__title">{data.title}</h2>
        <p className="service-page-header__description">
          {data.description}
        </p>
      </div>

      <Image className="service-page-header__img" {...data.image} />
      
      <div className="service-page-header__sub-description-wrapper">
        <p className="service-page-header__sub-description">
          {data.subDescription}
        </p>
      </div>
    </section>
  );
}
