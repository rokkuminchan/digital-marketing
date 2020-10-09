import React from "react";
import "./WorldRecruitHistory.css";
import Title from "../../common/Title.js";
import Image from "../../common/Image";

export default function WorldReruitHistory({ data }) {
  return (
    <section className="worldrecruithistory">
      <div className="worldrecruithistory__block1">
        <Title data={data.title} />
        <p className="worldrecruithistory__description">{data.description}</p>
      </div>
      <div className="worldrecruithistory__block2">
        <Image className="worldrecruithistory__img" {...data.image} />
        {/* <img
          className="worldrecruithistory__img"
          src={data.image.src}
          alt={data.image.alt}
        ></img> */}
      </div>
    </section>
  );
}
