import React from "react";
import "./MemberCharacteristic.css";
import Title from "../../common/Title.js";

export default function MemberCharacteristic({ data }) {
  return (
    <div className="member-characteristic">
      <Title data={data.title} />
      <p className="member-characteristic__description">{data.description}</p>
      <div className="member-characterstic__items">
        {data.items.map((item, index) => (
          <div key={index}>
            <div className="member-characterstic__items-title">
              <p>{item.title}</p>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
