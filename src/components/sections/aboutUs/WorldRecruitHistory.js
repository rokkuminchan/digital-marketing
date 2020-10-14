import React from "react";
import "./WorldRecruitHistory.css";
import Title from "../../common/Title.js";
import NewImage from "../../common/NewImage";

export default function WorldReruitHistory({ data }) {
  return (
    <section className="worldrecruithistory">
      <div className="worldrecruithistory__block1">
        <Title data={data.title} />
        <p className="worldrecruithistory__description">{data.description}</p>
      </div>
      <div className="worldrecruithistory__block2">
        <NewImage className="worldrecruithistory__img" {...data.image} />
      </div>
    </section>
  );
}
