import React from "react";
import "./Relationship.css";
import Title from "../../common/Title";

export default function Relationship({ data }) {
  return (
    <div className="relationship">
      <div className="reblock">
        <Title data={data.title} />
        <p className="relationship__description">{data.description}</p>
      </div>
      <div className="reblock">
        <img
          className="relationship__img"
          src={data.image.src}
          alt={data.image.alt}
        ></img>
      </div>
    </div>
  );
}
