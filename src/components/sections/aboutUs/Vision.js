import React from "react";
import "./Vision.css";
import Image from "../../common/Image";

export default function Vision({ data }) {
  console.log("Vision", data.image);
  return (
    <section className="vision">
      <h3 className="vision__title">{data.title}</h3>
      <p className="vision__description">{data.description}</p>
      <div className="vision__img">
        <Image {...data.image} />
      </div>
      <div className="vision__item">
        {data.items.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
