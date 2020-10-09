import React from "react";
import Image from "../../common/Image";
import "./PageHeader.css";
export default function PageHeader({ data }) {
  return (
    <section className="pageheader">
      <h1 className="page-header__title">{data.title}</h1>
      <Image className="page-header__img" {...data.image} />
      <p className="page-header__description">{data.description}</p>
    </section>
  );
}
