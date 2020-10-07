/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Img from "gatsby-image";

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
