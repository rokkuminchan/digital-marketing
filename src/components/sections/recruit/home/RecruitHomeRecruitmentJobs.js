import React from "react";
import "./RecruitHomeRecruitmentJobs.css";
import { useTranslation } from "react-i18next";
import { Button } from "@material-ui/core";
import Image from "../../../common/Image";
import ALink from "../../../common/ALink";

export default function RecruitHomeRecruitmentJobs({ data }) {
  const { t } = useTranslation();
  return (
    <section className="recruit-home-recruitment-jobs">
      {data.map((item, index) => (
        <div className="recruit-home-recruitment-jobs__card" key={index}>
          <Image
            className="recruit-home-recruitment-jobs__card-image"
            {...item.image}
          />
          <div className="recruit-home-recruitment-jobs__card-footer">
            <div
              className="recruit-home-recruitment-jobs__card-title"
              dangerouslySetInnerHTML={{ __html: t(item.title) }}
            ></div>
            <p
              className="recruit-home-recruitment-jobs__card-description"
              dangerouslySetInnerHTML={{ __html: t(item.description) }}
            ></p>
            <ALink
              to={item.button.link}
              className="recruit-home-recruitment-jobs__card-alink-button"
            >
              <Button
                variant="contained"
                color="primary"
                className="recruit-home-recruitment-jobs__card-button"
              >
                {t(item.button.title)}
              </Button>
            </ALink>
          </div>
        </div>
      ))}
    </section>
  );
}
