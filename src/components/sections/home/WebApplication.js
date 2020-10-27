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
      <Image className="web-application__img" {...data.backgroundSrc} />
      <div className="web-application__desciption">
        {data.description.map((item, index) => (
          <Description key={index} data={item} />
        ))}
      </div>
      <div className="web-application__items">
        {data.items.map((item, index) => (
          <div key={index} className={`web-application__item ${item.cssCol}`}>
            <Image className="web-application__items--icon" {...item.image} />
            <div className="web-application__items-description">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
