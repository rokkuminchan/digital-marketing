import React from "react";
import vision from "../../../images/aboutus__vision.jpg";
import "./Vision.css";
import { useTranslation } from "react-i18next";

const Vision = ({ data }) => {
  const {t}= useTranslation();
  const backgroundImage = {
    background: `url(${vision}) center center / cover no-repeat`,
  };

  return (
    <section className="vision">
      <div>
        <div className="vision-header" style={backgroundImage}>
          <div className="vision__title">
            <p>{t(data.title)}</p>
          </div>
          <div className="vision__description">
            <p>{t(data.description)}</p>
          </div>
        </div>
        <div className="vision__items">
          {data.items.map((item, index) => (
            <div key={index} className="vision__items--inline">
              <div className={`vision__items-title ${item.css}`}>
                <p>{t(item.title)}</p>
              </div>
              <p>{t(item.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Vision;
