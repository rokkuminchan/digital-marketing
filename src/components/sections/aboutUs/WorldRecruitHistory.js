import React from "react";
import "./WorldRecruitHistory.css";
import Title from "../../common/Title.js";
import Image from "../../common/Image";

export default function WorldReruitHistory({ data }) {
  console.log("WorldReruitHistory", data.image);
  return (
    <section className="worldrecruitristory">
      <Title data={data.title} />
      <p className="worldrecruitristory__description">{data.description}</p>
      <Image className="worldrecruitristory__img" {...data.image} />
    </section>
  );
}
