import React from "react";
import "./UniSubDesc.css";

const UniSubDesc = ({ data }) => {
  return (
    <div className="uniSubDesc">
      <h3 className="uniSubDesc__title">{data.title}</h3>
      {data.subtitle.map((item, index) => {
        return (
          <p className="uniSubDesc__desc" key={index}>
            {item}
          </p>
        );
      })}
    </div>
  )
};
export default UniSubDesc;
