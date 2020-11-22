import React from 'react';

import './JobOther.css';
import {Link} from 'react-router-dom';
import Title from '../../../common/Title';

export default function RecruitJobOther({data}) {
  return (
    <section className="job-other">
      <h3 className="job-other__title">{data.title}</h3>
      <div className="job-other__content">
        {data.content.map ((item, index) => (
          <Link to={item.link.src} className="job-other__button" key={index}>
            {item.link.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
