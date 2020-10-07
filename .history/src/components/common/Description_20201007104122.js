import React from "react";
import "./Description.css";

export default function Description({ data }) {
  return (
    <div className="title">
      <h3 className="title">{data}</h3>
    </div>
  );
}
