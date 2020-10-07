import React from "react";
import Title from "../../common/Title";
import University from "./University";
import Description from "../../common/Description";
import "./VNUniversity.css";

const VNUniversity = ({ data }) => {
  return (
    <section className="vnUniversity">
      <div className="vnUniversity__container">
        <Title data={data.title} />
        <Description data={data.description} className="vnUniversity__desc" />
        <div className="vnUniversity__list">
          {data.items.map((university, index) => {
            return <University key={index} data={university} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default VNUniversity;
