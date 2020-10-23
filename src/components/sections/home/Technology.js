import React from 'react';
import { Link } from "react-router-dom";

import Title from '../../common/Title';
import Description from '../../common/Description';
import Image from '../../common/Image';
import './Technology.css';

const Technology = ({data}) => {
  return (
    <section className="technology">
      <div className="technology__title">
        <Title data={data.title} />
      </div>
      <div className="technology__subtitle">
        <Description data={data.subtitle} />
      </div>
      <div className="technology__image">
        <Image {...data.image} />
      </div>
      <div className="technology__description">
        <p>
          {data.description}
          <Link to={data.link.src}>{data.link.title}</Link>
        </p>
      </div>
    </section>
  );
};
export default Technology;
