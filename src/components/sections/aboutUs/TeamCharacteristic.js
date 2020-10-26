import React from "react";
import DescriptiveIcon from "../../common/DescriptiveIcon";
import "./TeamCharacteristic.css";
import Title from "../../common/Title";

const TeamCharacteristic = ({ data }) => {
  return (
    <section className="team-characteristic">
        <div className="team-characteristic__imgbg">
          <div className="team-characteristic__title">
            <Title data={data.title} />
          </div>
          <p className="team-characteristic__description">{data.description}</p>
      </div>
      <div className="team-characteristic__items">
        {data.items.map((item, index) => {
          return <DescriptiveIcon key={index} data={item} />;
        })}
      </div>
    </section>
  );
};
export default TeamCharacteristic;
