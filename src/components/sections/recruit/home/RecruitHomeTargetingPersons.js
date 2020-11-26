import React from "react";
import "./RecruitHomeTargetingPersons.css";
import { useTranslation } from "react-i18next";
import Title from "../../../common/Title";
import Image from "../../../common/Image";
import icon from "../../../../images/recruit_home__targeting-persons-icon@2x.jpg";

function renderConnerBottom(index, length) {
  if (index === length - 1) {
    return (
      <div className="recruit-home-targeting-persons__conner-bottom"></div>
    );
  }
}
export default function RecruitHomeTargetingPersons({ data }) {
  const { t } = useTranslation();
  const language = t(data.languages);
  return (
    <section className="recruit-home-targeting-persons">
      <Title data={t(data.title)} />
      <div className="recruit-home-targeting-persons__image--wrapper">
        <Image
          className="recruit-home-targeting-persons__image"
          {...data.images[language]}
        />
      </div>
      <div className="recruit-home-targeting-persons__items--wrapper">
        {data.items.map((item1, index) => (
          <div className="recruit-home-targeting-persons__items" key={index}>
            <div className="recruit-home-targeting-persons__items-title">
              <div className="recruit-home-targeting-persons__conner-top"></div>
              {t(item1.title)}
            </div>
            {t(item1.description)
              .split("|")
              .map((item2, index) => (
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
                  {renderConnerBottom(
                    index,
                    t(item1.description).split("|").length
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
      <div class="recruit-home-targeting-persons__clear"></div>
    </section>
  );
}
