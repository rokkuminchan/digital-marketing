import React from "react";
import "./WorldRecruitHistory.css";

export default function WorldReruitHistory({ data }) {
  return (
    <div className="worldrecruitristory">
      <h3 className="worldrecruitristory__title">{data.title}</h3>
      <p className="worldrecruitristory__description">{data.description}</p>
      <img
        className="worldrecruitristory__img"
        src={data.img.src}
        alt={data.img.alt}
      ></img>
    </div>
  );
}
