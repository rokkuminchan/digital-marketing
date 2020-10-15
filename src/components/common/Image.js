/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Img from "gatsby-image";

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
  if(!props.src.childImageSharp){
    return <img {...props}></img>
  }else{
    return (
      <Img
        className={props.className}
        id={props.id}
        fluid={props.src.childImageSharp.fluid}
        atl={props.alt}
      />
    );
  }
}
