import React from "react";
import "./ToolCard.css";
import Image from "./Image";

export default function Card({ data }) {
  return (
    <section className="toolcard">
      <div className="toolcard__content">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
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
