import React from "react";

import Title from "../../common/Title";
import Image from "../../common/Image";
import "./DetailedWork.css";
import ALink from "../../common/ALink";

const DetailedWork = ({ data }) => {
  return (
    <section className="detailedwork__wrapper">
      <Title className="detailedwork__title" data={data.title} />
      <Image className="detailedwork__image" {...data.image} />
      <div className="detailedwork__description">
        <p>{data.descriptions1}</p>
        <span>
          {data.descriptions2}
          <ALink to={data.link.src} className="detailedwork__description--link">
            {data.link.title}
          </ALink>
        </span>
      </div>
    </section>
  );
};
export default DetailedWork;
