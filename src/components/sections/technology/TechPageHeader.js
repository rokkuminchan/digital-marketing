import React from "react";
import "./TechPageHeader.css";
import Image from "../../common/Image";
// import img from "../../../images/Technology/technology-pageheader.png";
export default function TechPageHeader({ data }) {
  return (
    <section className="tech-page-header">
      <h1 className="tech-page-header__title"> {data.title} </h1>
      <Image className="tech-page-header__img" {...data.image} />
      {/* <div className="tech-page-header__img">
        <img src={img} className="tech-image" />
      </div> */}
      <p className="tech-page-header__description"> {data.description} </p>
    </section>
  );
}
