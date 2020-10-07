import React from "react";
import "./Mission.css";
import Title from "../../common/Title";

export default function Mission({ data }) {
  return (
    <section className="mission">
      <div className="combine">
        <Title data={data.title} />
        {/* <h3 className="mission__title">{data.title}</h3> */}
        <p className="mission__description">{data.description}</p>
      </div>
      <div className="combineImg">
        <img
          className="mission__img"
          src={data.image.src}
          alt={data.image.alt}
        ></img>
      </div>
    </section>
  );
}
