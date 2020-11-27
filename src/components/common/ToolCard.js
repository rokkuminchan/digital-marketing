import React from "react";
import "./ToolCard.css";
import Image from "./Image";
import { useTranslation } from "react-i18next";

const Card = ({data}) => {
  const { t } = useTranslation();
  return (
    <section className="toolcard">
      <div className="toolcard__content">
        <div className="toolcard__content-title">
          <h3>{t(data.title)}</h3>
        </div>
        <span className="toolcard__content-description-bold">
          {t(data.description.bold)}
        </span>
        <span>{t(data.description.normal)}</span>
        <a className="toolcard__link" href={data.link}>
          {t(data.link)}
        </a>
      </div>
      <div>
        <Image className="toolcard__img" {...data.image} />
      </div>
    </section>
  );
}
export default Card;