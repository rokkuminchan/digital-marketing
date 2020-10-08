import React from "react";
import "./Title.css";

export default function Title({data}) {
  return (
    <div className="title">
      <h3 className="title">{data}</h3>
    </div>
  );
}
