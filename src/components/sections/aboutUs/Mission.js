import React from "react";
import "./Mission.css";

export default function Mission({ data }) {
  return (
    <section className="mission">
      <h3 className="mission__title">{data.title}</h3>
      <p className="mission__description">{data.description}</p>
      <img className="mission__img" src={data.image.src} alt={data.image.alt}></img>
    </section>
  );
}
