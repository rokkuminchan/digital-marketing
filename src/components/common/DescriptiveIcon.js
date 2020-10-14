import React from "react";
import "./DesciptiveIcon.css";
import NewImage from "./NewImage";

export default function DecriptiveIcon({ data }) {
  // console.log(data);
  return (
    <div className="descriptive-icon">
      <div className="descriptive-icon__wrap">
        <NewImage {...data.icon} />
      </div>
      <br/><p className="descriptive-icon__description">{data.description}</p>
    </div>
  );
}
