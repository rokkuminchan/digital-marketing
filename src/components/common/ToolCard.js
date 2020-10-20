import React from "react";
import "./ToolCard.css";
import Image from "./Image";

export default function Card({ data }) {
  return (
    <section className="toolcard">
      <div className="toolcard__content">
        <div className="toolcard__content-title">
          <h3>{data.title}</h3>
        </div>
        <span className="toolcard__content-description-bold">
          {data.description.bold}
        </span>
        <span>{data.description.normal}</span>
        <a className="toolcard__link" href={data.link}>
          {data.link}
        </a>
      </div>
      <div>
        <Image className="toolcard__img" {...data.image} />
      </div>
    </section>
  );
}
