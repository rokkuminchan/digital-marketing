import React from "react";
import "./Relationship.css";

export default function Relationship({ data }) {
  return (
    <div className="relationship">
      <h3 className="relationship__title">{data.title}</h3>
      <p className="relationship__description">{data.description}</p>
      <img
        className="relationship__img"
        src={data.img.src}
        alt={data.img.alt}
      ></img>
    </div>
  );
}
