import React from "react";
import "./TechPageHeader.css";
import Image from "../../common/Image";
import { useTranslation } from "react-i18next";

// export default function TechPageHeader({ data }) {
  const TechPageHeader = ({data}) => {
    const { t } = useTranslation();

  return (
    <section className="tech-page-header">
      <div className="tech-page-header__block1">
        <h1 className="tech-page-header__title">{t(data.title)} </h1>
        <div className="tech-page-header__img">
          <Image className="tech-img" {...data.image} />
        </div>
      </div>
        <div className="tech-page-header__block2" dangerouslySetInnerHTML={{__html: t(data.description)}} />
    </section>
  );
}
export default TechPageHeader;