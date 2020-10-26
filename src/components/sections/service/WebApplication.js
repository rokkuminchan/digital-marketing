import React from "react";

import "./WebApplication.css";
import Title from "../../common/Title";
import Description from "../../common/Description";
import Image from "../../common/Image";
import ALink from "../../common/ALink";

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
            <Image
              className="web-application__items--icon"
              key={index}
              {...item.image}
            />
            <div className="web-application__items-description">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="web-application__sub-description">
        <p>{data.subDescription1}</p>
        <span>
          {data.subDescription2}
          <ALink
            to={data.link.src}
            className="web-application__sub-description--link"
          >
            {data.link.title}
          </ALink>
        </span>
      </div>
      <Image className="web-application__image" {...data.image} />
    </div>
  );
}
