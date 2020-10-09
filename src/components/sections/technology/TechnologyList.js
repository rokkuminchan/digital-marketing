import React from "react";
import "./TechnologyList.css";
import ToolCard from "../../common/ToolCard.js";
import Title from "../../common/Title";
import Description from "../../common/Description";

export default function TechnologyList({ data }) {
  return (
    <section className="technologylist">
      <div>
        <Title data={data.title} />
        <Description data={data.description} />
        <div className="technologylist__items">
          {data.items.map((list, index) => {
            return <ToolCard key={index} data={list} />;
          })}
        </div>
      </div>
    </section>
  );
}
