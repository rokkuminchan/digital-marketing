import React from "react";
import "./Card.css";
import Image from "./Image";
import { useTranslation } from "react-i18next";

const Card=({ data })=> {
  const {t}= useTranslation();
  return (
    <div className="card">      
      <Image className="card__img" {...data.image} />
      <div className="card__content">
        <h3>{t(data.title)}</h3>
        <p>{t(data.description)}</p>
      </div>
    </div>
  );
};
export default Card;
