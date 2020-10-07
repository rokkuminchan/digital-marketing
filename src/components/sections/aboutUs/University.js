import React from "react";
import UniSubDesc from "./UniSubDesc";
import "./University.css";

const University = ({ data }) => {
  return (
    <div className="university">
      <div className="university_title-image">
        <h3 className="university__title">{data.title}</h3>
        <img
          className="university__image"
          src={data.image.src}
          alt={data.image.alt}
        />
      </div>
      <div className="university__desc-link">
        <div className="university__desc">
          {data.description.map((sub, index) => {
            return <UniSubDesc key={index} data={sub} />;
          })}
        </div>
        <a className="university__link" href={data.link}>
          {data.link}
        </a>
      </div>
    </div>
  );
};

export default University;
