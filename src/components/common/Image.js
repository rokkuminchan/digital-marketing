/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Img from "gatsby-image";

function getImg(src) {
  const results = src.split("/");
  const imgFileName = results[results.length - 1];
  const category = results[results.length - 2];

  switch (category) {
    case "AboutUs":
      return require("../../images/AboutUs/" + imgFileName)
    case "Technology":
      return require("../../images/Technology/" + imgFileName)
    case "Service":
      return require("../../images/Service/" + imgFileName)
    default:
      return src;
  }
}

export default function Image(props) {
  console.log(props);
  return (
    <Img
      className={props.className}
      id={props.id}
      fluid={props.src.childImageSharp.fluid}
      atl={props.alt}
    />
  );
}
