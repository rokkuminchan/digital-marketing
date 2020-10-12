import React from "react";
import "./TechnologyList.css";
import ToolCard from "../../common/ToolCard.js";
import Title from "../../common/Title";
import Description from "../../common/Description";

export default function TechnologyList({ data }) {
  return (
    <section className="technology-list">
      <div>
        <div className="technology-list__header">
          <Title data={data.title} />
          <Description data={data.description} />
        </div>
        <div className="technology-list__items">
          {data.items.map((list, index) => (
            <ToolCard key={index} data={list} />
          ))}
        </div>
      </div>
    </section>
  );
}
