import React from 'react';
import { useTranslation } from "react-i18next";

import './JobOther.css';
import {Link} from 'react-router-dom';

export default function RecruitJobOther({data}) {
  const { t } = useTranslation();
  return (
    <section className="job-other">
      <h3 className="job-other__title">{t(data.title)}</h3>
      <div className="job-other__content">
        {data.content.map ((item, index) => (
          <Link to={item.link.src} className="job-other__button" key={index}>
            {t(item.link.name)}
          </Link>
        ))}
      </div>
    </section>
  );
}
