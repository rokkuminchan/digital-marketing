import React from "react";
import "./RecruitHomeTargetingPersons.css";
import Title from "../../../common/Title";
import Image from "../../../common/Image";
import icon from "../../../../images/recruit-home__targeting-persons-icon@2x.jpg";

function renderConnerBottom(index, length) {
  if (index === length - 1) {
    return (
      <div className="recruit-home-targeting-persons__conner-bottom"></div>
    );
  }
}
export default function RecruitHomeTargetingPersons({ data }) {
  return (
    <section className="recruit-home-targeting-persons">
      <Title data={data.title} />
      <div className="recruit-home-targeting-persons__image--wrapper">
        <Image
          {...data.image}
          className="recruit-home-targeting-persons__image"
        />
      </div>
      <div className="recruit-home-targeting-persons__items--wrapper">
        {data.items.map((item1, index) => (
          <div className="recruit-home-targeting-persons__items" key={index}>
            <div className="recruit-home-targeting-persons__items-title">
              <div className="recruit-home-targeting-persons__conner-top"></div>
              {item1.title}
            </div>
            {item1.description.map((item2, index) => (
              <div
                className="recruit-home-targeting-persons__items-description--wrapper"
                key={index}
              >
                <img
                  src={icon}
                  alt="icon"
                  className="recruit-home-targeting-persons__items-icon"
                />
                <span className="recruit-home-targeting-persons__items-description">
                  {item2}
                </span>
                {renderConnerBottom(index, item1.description.length)}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div class="recruit-home-targeting-persons__clear"></div>
    </section>
  );
}
