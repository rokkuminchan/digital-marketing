import React from "react";
import UniSubDesc from "./UniSubDesc";
import "./University.css";
import NewImage from "../../common/NewImage";

const University = ({ data }) => {
  return (
    <div className="university">
      <div className="university_title-image">
        <h3 className="university__title">{data.title}</h3>
        <div className="university__image">
          <NewImage {...data.image} />
        </div>
      </div>
      <div className="university__desc-link">
        <div className="university__desc">
          {data.description.map((sub, index) => {
            return <UniSubDesc key={index} data={sub} />;
          })}
        </div>
        <a className="university__link" href={data.link} target="_blank" rel="noreferrer noopener">
          {data.link}
        </a>
      </div>
    </div>
  );
};

export default University;
