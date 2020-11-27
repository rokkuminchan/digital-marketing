import React from "react";
import "./MemberIntro.css";
import Title from "../../common/Title.js";
import Card from "../../common/Card.js";
import Description from "../../common/Description";
import { useTranslation } from "react-i18next";

const MemberIntro =({ data })=> {
  const {t}= useTranslation();
  return (
    <section className="memberIntro">
      <Title data={t(data.title)} />
      <Description data={t(data.description)} />
      <div className="memberIntro__items">
        {data.items.map((member, index) => {
          return <Card key={index} data={member} />;
        })}
      </div>
    </section>
  );
};
export default MemberIntro;
