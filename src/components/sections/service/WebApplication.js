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
      <div className="web-application__desciption">
        <Description data={data.description} />
      </div>
      {data.items.map((item, index) => (
        <div key={index} className="web-application__items">
          <span className="web-application__items-icon">
            <Icon {...item.icon} />
          </span>
          <span className="web-application__items-description">
            {item.description}
          </span>
        </div>
      ))}
      <div className="web-application__sub-description web-application__desciption">
        <p>{data.subDescription1}</p>
        <span>{data.subDescription2}</span>
        <span>
          <a href={data.link.src}>{data.link.title}</a>
        </span>
      </div>
      <div className="web-application__image">
        <Image {...data.image} />
      </div>
    </div>
  );
}
