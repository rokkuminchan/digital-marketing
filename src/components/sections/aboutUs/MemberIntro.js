import React from "react";
import "./MemberIntro.css";
import Title from "../../common/Title.js";
import Card from "../../common/Card.js";
import Description from "../../common/Description";

export default function MemberIntro({ data }) {
  return (
    <section className="memberIntro">
      <Title data={data.title} />
      <Description data={data.description} />
      <div className="memberIntro__items">
        {data.items.map((member, index) => {
          return <Card key={index} data={member} />;
        })}
      </div>
    </section>
  );
}
