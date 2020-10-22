import React from "react";
import "./WebApplication.css";
import Title from "../../common/Title";
import Description from "../../common/Description";
import Image from "../../common/Image";
import Icon from "../../common/Icon";

export default function WebApplication({ data }) {
  return (
    <div className="web-application">
      <div className="web-application__title">
        <Title data={data.title} />
      </div>
      <div className="web-application__icon">
        <span className="web-application__icon--shape">
          <Icon {...data.icon} />
        </span>
      </div>

      <Image className="web-application__img" {...data.backgroundSrc} />

      <div className="web-application__desciption">
        {data.description.map((item, index) => (
          <Description key={index} data={item} />
        ))}
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
    </div>
  );
}
