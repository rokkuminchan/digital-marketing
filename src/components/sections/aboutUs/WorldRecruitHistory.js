import React from "react";
import "./WorldRecruitHistory.css";
import Title from "../../common/Title.js";
import Image from "../../common/Image";
import "../../common/Description.css";
import Description from "../../common/Description";

export default function WorldReruitHistory({ data }) {
  console.log("WorldReruitHistory", data.image);
  return (
    <section className="worldrecruithistory">
      <div className="worldrecruithistory__block1">
        <Title data={data.title} />
        <Description data={data.description} />
        {/* <p className="worldrecruithistory__description">{data.description}</p> */}
      </div>
      <div className="worldrecruithistory__block2">
        <Image className="worldrecruithistory__img" {...data.image} />
      </div>
    </section>
  );
}
