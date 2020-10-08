import React from "react";
import "./Relationship.css";

export default function Relationship({ data }) {
  return (
    <div className="card">
      <img className="card__img" src={data.img.src} alt={data.img.alt}></img>
      <h3 className="card__title">{data.title}</h3>
      <p className="card__description">{data.description}</p>
    </div>
  );
}
