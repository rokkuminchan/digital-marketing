import React from "react";
import "./Mission.css";
// import Title from "../../common/Title";
// import Description from "../../common/Description";
import Image from "../../common/Image";
import {useTranslation} from 'react-i18next';

const Mission = ({ data }) => {
  const {t} = useTranslation();
  return (
    <section>
      <div className="mission">
        <div className="mission__block1">
          {/* <Title className="mission__title" data={data.title} />
          <Description
            className="mission__description"
            data={data.description}
          /> */}
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
