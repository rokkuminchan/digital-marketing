import React from "react";
import "./TechnologyList.css";
import ToolCard from "../../common/ToolCard.js";
import { useTranslation } from "react-i18next";

const TechnologyList = ({data}) => {
  const { t } = useTranslation();
// export default function TechnologyList({ data }) {
  const description = `<div class="technology-list__header-description-padding">${t(data.description)}</div>`;
  return (
    <section className="technology-list">
      <div>
        <div className="technology-list__header">
          <div className="technology-list__header-title">
            <span className="technology-list__header-title-large">{t(data.title.large)}</span>
            <span className="technology-list__header-title-small">{t(data.title.small)}</span>
          </div>
          <div dangerouslySetInnerHTML={{__html: description}} />          
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
export default TechnologyList;