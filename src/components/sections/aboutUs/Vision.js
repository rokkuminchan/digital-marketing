import React from "react";
import "./Vision.css";
import Image from "../../common/Image";

export default function Vision({ data }) {
  return (
    <section className="vision">
      <div className="vision-header">
        <h3 className="vision__title">{data.title}</h3>
        <p className="vision__description">{data.description}</p>
      </div>
      <div className="vision__items">
        {data.items.map((item, index) => (
          <div key={index}>
            <div className="vision__items-title">
              <p>{item.title}</p>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
