import React from 'react';

import './JobOther.css';
import {Link} from 'react-router-dom';
import Title from '../../../common/Title';

export default function RecruitJobOther({data}) {
  return (
    <section className="job-other">
      <div className="job-other__title">
        <Title data={data.title} />
      </div>
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
