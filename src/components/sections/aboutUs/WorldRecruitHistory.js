import React from "react";
import "./WorldRecruitHistory.css";
import Title from "../../common/Title.js";
import Image from "../../common/Image";
import {useTranslation} from 'react-i18next';

export default function WorldReruitHistory({ data }) {
  const {t} = useTranslation();
  return (
    <section className="worldrecruithistory">
      <div className="worldrecruithistory__block1">
        <Title data={t(data.title)} />
        <p className="worldrecruithistory__description">{t(data.description)}</p>
      </div>
      <div className="worldrecruithistory__block2">
        <Image className="worldrecruithistory__img" {...data.image} />
      </div>
    </section>
  );
}
