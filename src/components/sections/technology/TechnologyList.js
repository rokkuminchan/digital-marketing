import React from "react";
import "./Technology.css";
import Card from "../../common/Card.js";

export default function TechnologyList({ data }) {
  return (
    <section className="technologylist">
      <div>
        <Title data={data.title} />
        <Description data={data.description} />
        <div className="technologylist__items">
          {data.items.map((member, index) => {
            return <Card key={index} data={member} />;
          })}
        </div>
      </div>
    </section>
  );
}
