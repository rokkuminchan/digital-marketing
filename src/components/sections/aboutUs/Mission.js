import React from "react";
import "./Mission.css";
import Title from "../../common/Title";
import Image from "../../common/Image";

export default function Mission({ data }) {
  console.log("Mission", data.image);
  return (
    <section className="mission">
      <div className="combine">
        <Title data={data.title} />
        {/* <h3 className="mission__title">{data.title}</h3> */}
        <p className="mission__description">{data.description}</p>
      </div>
      <div className="combineImg">
        <Image className="mission__img" {...data.image} />
      </div>
    </section>
  );
}
