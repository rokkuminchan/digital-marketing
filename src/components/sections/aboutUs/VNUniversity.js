import React from "react";
import Title from "../../common/Title";
import University from "./University";

const VNUniversity = ({ data }) => {
  return (
    <section className="vnUniversity">
      <Title data={data.title} />
      <h3 className="vnUniversity__title">{data.title}</h3>
      <p className="vnUniversity__desc">{data.description}</p>
      <div className="vnUniversity__list">
        {data.items.map((university, index) => {
          return <University key={index} data={university} />;
        })}
      </div>
    </section>
  );
};

export default VNUniversity;
