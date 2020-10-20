import React from "react";

import "./WebApplication.css";
import Title from "../../common/Title";
import Description from "../../common/Description";
import Image from "../../common/Image";

export default function WebApplication({ data }) {
  return (
    <div className="web-application">
      <div className="web-application__title">
        <Title data={data.title} />
      </div>
      <div className="web-application__desciption">
        <Description data={data.description} />
      </div>
      <div className="web-application__items">
        {data.items.map((item, index) => (
          <div key={index} className={`web-application__item ${item.cssCol}`}>
            <div
              className="web-application__items-number"
              style={{
                borderBottom: `${item.cssColor} solid 1px`,
              }}
            >
              <div className={`web-application__items-number--${index}`}>
                {item.number}
              </div>
              <style>
                {`.web-application__items-number--${index}:before{
                  background-color: ${item.cssColor}`}
              </style>
            </div>
            <div className="web-application__items-description">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="web-application__sub-description">
        <p>{data.subDescription1}</p>
        <span>{data.subDescription2}</span>
        <span>
          <a href={data.link.src}>
            <p>{data.link.title}</p>
          </a>
        </span>
      </div>
      <div className="web-application__image">
        <Image {...data.image} />
      </div>
    </div>
  );
}
//
