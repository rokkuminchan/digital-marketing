import React from "react";
import "./MemberCharacteristic.css";
import Title from "../../common/Title.js";
import Description from "../../common/Description.js";
import { useTranslation } from "react-i18next";

export default function MemberCharacteristic({ data }) {
  const { t } = useTranslation();
  return (
    <section className="member-characteristic">
      <Title data={t(data.title)} />
      <Description data={t(data.description)} />
      <div className="member-characteristic__items">
        {data.items.map((item, index) => (
          <div key={index} className="member-characteristic__items--inline">
            <div className={`member-characteristic__items-title ${item.css}`}>
              <p>{item.title}</p>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
