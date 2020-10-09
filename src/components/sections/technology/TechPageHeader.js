import React from "react";
import "./TechPageHeader.css";
import Image from "../../common/Image";
export default function TechPageHeader({ data }) {
  return (
    <section className="tech-page-header">
      <h1 className="tech-page-header__title">{data.title} </h1>
      <div className="tech-page-header__img">
        <Image className="tech-img" {...data.image} />
      </div>
      <p className="tech-page-header__description"> {data.description} </p>
    </section>
  );
}
