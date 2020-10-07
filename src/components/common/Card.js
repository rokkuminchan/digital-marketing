import React from "react";
import "./Card.css";
import Image from "./Image";

export default function Card({ data }) {
  return (
    <div className="card">
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
