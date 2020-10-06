import React from "react";
import "./Relationship.css";
import Title from "../../common/Title";

export default function Relationship({ data }) {
  return (
    <div className="relationship">
      <div className="relationship__block">
        <Title data={data.title} />
        <p className="relationship__description">{data.description}</p>
      </div>
      <div className="relationship__block">
        <img
          className="relationship__img"
          src={data.image.src}
          alt={data.image.alt}
        ></img>
      </div>
    </div>
  );
}
