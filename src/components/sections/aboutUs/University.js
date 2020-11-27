import React from "react";
import UniSubDesc from "./UniSubDesc";
import "./University.css";
import Image from "../../common/Image";
import {useTranslation} from 'react-i18next';

const University = ({ data }) => {
  const {t} = useTranslation();
  return (
    <div className="university">
      <div className="university_title-image">
        <h3 className="university__title">{t(data.title)}</h3>
        <Image  className="university__image" {...data.image} />
      </div>
      <div className="university__desc-link">
        <div className="university__desc">
          {data.description.map((sub, index) => {
            return <UniSubDesc key={index} data={sub} />;
          })}
        </div>
        <a className="university__link" href={data.link} target="_blank" rel="noreferrer noopener">
          {data.link}
        </a>
      </div>
    </div>
  );
};

export default University;
