import React from "react";
import "./Card.css";
import Image from "./Image";

export default function Card({ data }) {
  return (
    <div className="col-3 col-s-5 card">
      <div className="card__img">
        <Image {...data.image} />
      </div>
      <div className="card__content">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
