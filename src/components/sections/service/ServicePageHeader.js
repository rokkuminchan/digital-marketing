import React from "react";
import "./ServicePageHeader.css";
import Image from "../../common/Image";
export default function SerivePageHeader({ data }) {
  return (
    <section className="service-page-header">
      <div className="service-page-header__block1">
        <h1 className="service-page-header__title">{data.title} </h1>
        <div className="service-page-header__block2">
          <p className="service-page-header__description">{data.description}</p>
        </div>
        <div className="service-page-header__img">
          <Image className="service-img" {...data.image} />
        </div>
      </div>
      <div className="service-page-header__block3">
        <p className="service-page-header__subDescription">
          {data.subDescription}
        </p>
      </div>
    </section>
  );
}
