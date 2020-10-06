import React from "react";
import "./MemberIntro.css";
import Title from "../../common/Title.js";
import Card from "../../common/Card.js";

export default function MemberIntro({ data }) {
	return (
    <section className="memberIntro">
      <Title data={data.title} />
      <p className="memberIntro__description">{data.description}</p>
      <div className="memberIntro__member-list">
        {data.items.map((member, index) => {
          return <Card key={index} data={member} />;
        })}
      </div>
    </section>
  );
}
