import React from "react";
import "./RecruitHomeTargetingPersons.css";
import Title from "../../../common/Title";
import Image from "../../../common/Image";
import icon from "../../../../images/recruit-home__targeting-persons-icon@2x.jpg";

export default function RecruitHomeTargetingPersons({ data }) {
  return (
    <section className="recruit-home-targeting-persons">
      <Title data={data.title} />
      <Image
        {...data.image}
        className="recruit-home-targeting-persons__image"
      />
      <div className="recruit-home-targeting-persons__items--wrapper">
        {data.items.map((item1, index) => (
          <div className="recruit-home-targeting-persons__items" key={index}>
            <div className="recruit-home-targeting-persons__items-title">
              {item1.title}
            </div>
            {item1.description.map((item2, index) => (
              <div
                className="recruit-home-targeting-persons__items-description--wrapper"
                key="index"
              >
                <img
                  src={icon}
                  alt="icon"
                  className="recruit-home-targeting-persons__items-icon"
                />
                <span className="recruit-home-targeting-persons__items-description">
                  {item2}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
