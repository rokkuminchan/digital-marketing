import React from "react";
import "./Mission.css";
import Image from "../../common/Image";
import {useTranslation} from 'react-i18next';

const Mission = ({ data }) => {
  const {t} = useTranslation();
  return (
    <section>
      <div className="mission">
        <div className="mission__block1">
          <h3 className="mission__title">{t(data.title)}</h3>
          <p className="mission__description">{t(data.description)}</p>
        </div>

        <div className="mission__block2">
          <Image className="mission__img" {...data.image} />
        </div>
      </div>
    </section>
  )
};
export default Mission;
