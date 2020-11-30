import React from "react";
import DescriptiveIcon from "../../common/DescriptiveIcon";
import "./TeamCharacteristic.css";
import Title from "../../common/Title";
import { useTranslation } from "react-i18next";

const TeamCharacteristic = ({ data }) => {
  const {t}= useTranslation();
  return (
    <section className="team-characteristic">
        <div className="team-characteristic__imgbg">
          <div className ="team-characteristic__solution"></div>
          <div className="team-characteristic__text">
            <div className="team-characteristic__text-wrap">
              <Title className="team-characteristic__title" data={t(data.title)} />
              <p className="team-characteristic__description">{t(data.description)}</p>  
            </div>
          </div>
      </div>
      <div className="team-characteristic__items">
        {data.items.map((item, index) => {
          return <DescriptiveIcon key={index} data={item} />;
        })}
      </div>
    </section>
  );
};
export default TeamCharacteristic;
