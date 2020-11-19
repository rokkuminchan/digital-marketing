import React from "react";

import "./jobOther.css";
import Title from "../../../common/Title";
import ALink from '../../../common/ALink';

export default function RecruitJobOther({ data }) {
  return (
    <section className="recruit-jobOther">
        <div className="recruit-jobOther__title">
             <Title data={data.title} />
        </div>
        <div className="recruit-jobOther__content">
            {data.content.map((item, index) => (
                <div className="recruit-jobOther__link" key={index}>
                    <ALink to={item.link}>{item.link.name}</ALink>
                </div>
             ))}
      </div>
    </section>
  );
}
