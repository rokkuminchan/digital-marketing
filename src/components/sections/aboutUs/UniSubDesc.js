import React from "react";
import "./UniSubDesc.css";
import {useTranslation} from 'react-i18next';

const UniSubDesc = ({ data }) => {
  const {t} = useTranslation();
  return (
    <div className="uniSubDesc">
      <h3 className="uniSubDesc__title">{t(data.title)}</h3>
      {data.subtitle.map((item, index) => {
        return (
          <p className="uniSubDesc__desc" key={index}>
            {t(item)}
          </p>
        );
      })}
    </div>
  )
};
export default UniSubDesc;
