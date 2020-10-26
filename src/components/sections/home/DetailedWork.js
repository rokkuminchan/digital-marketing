import React from "react";
import { Link } from "react-router-dom";

import Title from "../../common/Title";
import Image from "../../common/Image";
import "./DetailedWork.css";

const DetailedWork = ({ data }) => {
  return (
    <section className="detailedwork__wrapper">
      <Title className="detailedwork__title" data={data.title} />
      <Image className="detailedwork__image" {...data.image} />
      <div className="detailedwork__description">
        <p>{data.descriptions1}</p>
        <span>
          {data.descriptions2}
          <Link to={data.link.src} className="detailedwork__description--link">
            {data.link.title}
          </Link>
        </span>
      </div>
    </section>
  );
};
export default DetailedWork;
