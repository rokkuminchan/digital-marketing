/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function getImg(src) {
  const results = src.split("/");
  const imgFileName = results[results.length - 1];
  const category = results[results.length - 2];

  switch (category) {
    case "images":
      return require("../../images/" + imgFileName)
    default:
      return src;
  }
}

export default function Image(props) {
  return <img className={props.className}
    id={props.id}
    src={getImg(props.src)}
    alt={props.alt}>
  </img>
}
