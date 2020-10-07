import React from "react";
import "./Relationship.css";
import Title from "../../common/Title";
import Image from "../../common/Image";

export default function Relationship({ data }) {
  console.log("Relationship", data.image);
  return (
    <div className="relationship">
      <div className="relationship__block1">
        <Title data={data.title} />
        <p className="relationship__description">{data.description}</p>
      </div>
      <div className="relationship__block2">
        <Image className="relationship__img" {...data.image} />
      </div>
    </div>
  );
}
