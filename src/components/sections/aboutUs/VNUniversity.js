import React from "react";
import Title from "../../common/Title";
import Description from "../../common/Description";
import University from "./University";
import "./VNUniversity.css";
import {useTranslation} from 'react-i18next';

const VNUniversity = ({ data }) => {
  const {t} = useTranslation();
  return (
    <section className="vnUniversity">
      <div className="vnUniversity__container">
        <Title data={t(data.title)} />
        <Description data={t(data.description)} />
        <div className="vnUniversity__list">
          {data.items.map((university, index) => {
            return <University key={index} data={university} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default VNUniversity;
