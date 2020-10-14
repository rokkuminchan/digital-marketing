import React from "react";
import "./Relationship.css";
import Title from "../../common/Title";
import NewImage from "../../common/NewImage";

export default function Relationship({ data }) {
  console.log("Relationship", data.image);
  return (
    <div className="relationship">
      <div className="relationship__block1">
        <Title data={data.title} />
        <p className="relationship__description">{data.description}</p>
      </div>
      <div className="relationship__block2">
        <NewImage className="relationship__img" {...data.image} />
      </div>
    </div>
  );
}
