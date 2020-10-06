import React from "react";
import UniSubDesc from "./UniSubDesc";

const University = ({ data }) => {
  return (
    <div className="university">
      <h3>{data.title}</h3>
      <img
        className="university__image"
        src={data.image.src}
        alt={data.image.alt}
      />
      <div className="university__desc">
        {data.description.map((sub, index) => {
          return <UniSubDesc key={index} data={sub} />;
        })}
      </div>
      <a className="university__link" href={data.link}>
        {data.link}
      </a>
    </div>
  );
};

export default University;
