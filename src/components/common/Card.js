import React from "react";
import "./Card.css";
import NewImage from "./NewImage";

export default function Card({ data }) {
  return (
    <div className="card">      
      <NewImage className="card__img" {...data.image} />
      <div className="card__content">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
