import React from "react";
import "./Vision.css";

export default function Vision({ data }) {
  const backgroundImage = {
    background: `url(${data.image.src}) center center / cover no-repeat`,
  };

  return (
    <section className="vision">
      <div>
        <div className="vision-header" style={backgroundImage}>
          <div className="vision__title">
            <p>{data.title}</p>
          </div>
          <div className="vision__description">
            <p>{data.description}</p>
          </div>
        </div>
        <div className="vision__items">
          {data.items.map((item, index) => (
            <div key={index} className="vision__items--inline">
              <div className={`vision__items-title ${item.css}`}>
                <p>{item.title}</p>
              </div>
              <p className="vision__items-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
