import React from "react";
import Title from "../../common/Title";
import { useTranslation } from "react-i18next";
import Image from "../../common/Image";
import "./DetailedWork.css";
import ALink from "../../common/ALink";

const DetailedWork = ({ data }) => {
  const { t } = useTranslation();
  return (
    <section className="detailedwork__wrapper">
      <div className="detailedwork__title">
        <Title data={t(data.title)} />
      </div>
      <Image className="detailedwork__image" {...data.image} />
      <div className="detailedwork__description">
        <p>{t(data.descriptions1)}</p>
        <span>
          {t(data.descriptions2)}
          <ALink to={data.link.src} className="detailedwork__description--link">
            {t(data.link.title)}
          </ALink>
        </span>
      </div>
    </section>
  );
};
export default DetailedWork;
