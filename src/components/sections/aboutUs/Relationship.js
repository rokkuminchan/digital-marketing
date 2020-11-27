import React from "react";
import "./Relationship.css";
import Title from "../../common/Title";
import Image from "../../common/Image";
import { useTranslation } from 'react-i18next';

export default function Relationship({ data }) {
  const { t } = useTranslation();

  return (
    <section className="relationship">
      <div className="relationship__block1">
        <Title data={t(data.title)} />
        <p className="relationship__description">{t(data.description)}</p>
      </div>
      <div className="relationship__block2">
        <Image className="relationship__img" {...data.image} />
      </div>
    </section>
  );
}
