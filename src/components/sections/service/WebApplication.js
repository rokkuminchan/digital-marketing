import React from "react";

import "./WebApplication.css";
import Title from "../../common/Title";
import Description from "../../common/Description";
import Image from "../../common/Image";
import ALink from "../../common/ALink";
import { useTranslation } from "react-i18next";

export default function WebApplication({ data }) {
  const { t } = useTranslation();
  return (
    <div className="web-application">
      <div className="web-application__title">
        <Title data={t(data.title)} />
      </div>
      <div className="web-application__desciption">
        <Description data={t(data.description)} />
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
              <p>{t(item.description)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="web-application__sub-description">
        <p>{t(data.subDescription1)}</p>
        <span>{t(data.subDescription2)}</span>
        <span className="web-application__sub-description--link">
          <ALink to={data.link.src}>{t(data.link.title)}</ALink>
        </span>
      </div>
      <Image className="web-application__image" {...data.image} />
    </div>
  );
}
