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
          <div className="technology-list__header-title">
            <span className="technology-list__header-title-large">{data.title.large}</span>
            <span className="technology-list__header-title-small">{data.title.small}</span>
          </div>
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
