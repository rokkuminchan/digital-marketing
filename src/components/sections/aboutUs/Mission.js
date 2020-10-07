import React from "react";
import "./Mission.css";
import Title from "../../common/Title";
import Description from "../../common/Description";
import Image from "../../common/Image";

export default function Mission({ data }) {
  return (
    <section className="mission">
      <div className="mission__block1">
        <Title data={data.title} />
        {/* <h3 className="mission__title">{data.title}</h3> */}
        {/* <p className="mission__description">{data.description}</p> */}
        <Description data={data.description} />
      </div>
      <div className="mission__block2">
        {/* <img
          className="mission__img"
          src={data.image.src}
          alt={data.image.alt}
        ></img> */}
        <Image {...data.image} />
      </div>
    </section>
  );
}
