import React from "react";
import "./TechnologyList.css";
import ToolCard from "../../common/ToolCard.js";
import Description from "../../common/Description";

export default function TechnologyList({ data }) {
  const titleLarge = data.title.replace('リスト','');
  const titleSmall = data.title.replace('技術','');
  return (
    <section className="technology-list">
      <div>
        <div className="technology-list__header">
          <div className="technology-list__title">
            <span className="technology-list__title-large">{titleLarge}</span>
            <span className="technology-list__title-small">{titleSmall}</span>
          </div>
          <Description data={data.description} />
        </div>
        <div className="technologylist__items">
          {
          data.item.map((list, index) => (
            <ToolCard key={index} data={list} />
          ))
          }
        </div>
      </div>
    </section>
  );
}
