import React from "react";
import "./WorldRecruitHistory.css";
import Title from "../../common/Title.js";

export default function WorldReruitHistory({ data }) {
  return (
    <section className="worldrecruitristory">
      <Title data={data.title} />
      <p className="worldrecruitristory__description">{data.description}</p>
      <div>
        <img
          className="worldrecruitristory__img"
          src={data.image.src}
          alt={data.image.alt}
        ></img>
      </div>
    </section>
  );
}
