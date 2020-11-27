import React from 'react';
import { useTranslation } from "react-i18next";
import Title from '../../common/Title';
import Description from '../../common/Description';
import Image from '../../common/Image';
import './Technology.css';
import ALink from '../../common/ALink';

const Technology = ({ data }) => {
  const { t } = useTranslation();
  return (
    <section className="technology">
      <div className="technology__title">
        <Title data={t(data.title)} />
      </div>
      <div className="technology__subtitle">
        <Description data={t(data.subtitle)} />
      </div>
      <Image className="technology__image" {...data.image} />
      <div className="technology__description">
        <p>
          {t(data.description)}
          <ALink to={data.link.src}>{t(data.link.title)}</ALink>
        </p>
      </div>
    </section>
  );
};
export default Technology;
