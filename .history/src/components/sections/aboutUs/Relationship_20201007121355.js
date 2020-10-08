import React from "react";
import "./Relationship.css";
import Title from "../../common/Title";
import Description from "../../common/Description";

export default function Relationship({ data }) {
  return (
    <div className="relationship">
      <div className="relationship__block1">
        <Title data={data.title} />
        <div className="relationship__description">
          <Description data={data.description} />
        </div>
      </div>
      <div className="relationship__block2">
        <img
          className="relationship__img"
          src={data.image.src}
          alt={data.image.alt}
        ></img>
      </div>
    </div>
  );
}
