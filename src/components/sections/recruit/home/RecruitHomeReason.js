import React from "react";
import "./RecruitHomeReason.css";
import { useTranslation } from "react-i18next";
import Image from "../../../common/Image";

export default function RecruitHomeReason({ data }) {
  const { t } = useTranslation();
  return (
    <section className="recruit-home-reason">
      <h3 className="recruit-home-reason-title">{t(data.title)}</h3>
      <div className="recruit-home-reason__items">
        {data.items.map((item, index) => (
          <div key={index} className="recruit-home-reason__card">
            <Image
              className="recruit-home-reason__card-image"
              {...item.image}
            />
            <div className="recruit-home-reason__card-content">
              {/* <h3>{item.title}</h3> */}
              <div
                className="recruit-home-reason__card-content-title"
                dangerouslySetInnerHTML={{ __html: t(item.title) }}
              ></div>
              <p>{t(item.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
