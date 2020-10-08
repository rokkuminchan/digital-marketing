import React from "react";
import "./Vision.css";

export default function Vision({ data }) {
  return (
    <section className="vision">
      <div>
        <div className="vision-header">
          <h3 className="vision__title vision-header-inline">{data.title}</h3>
          <p className="vision__description vision-header-inline">
            {data.description}
          </p>
        </div>
        <div className="vision__items">
          {data.items.map((item, index) => (
            <div key={index}>
              <div className={`vision__items-title ${item.css}`}>
                <p>{item.title}</p>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
