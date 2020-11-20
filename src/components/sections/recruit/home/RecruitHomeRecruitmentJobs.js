import React from "react";
import "./RecruitHomeRecruitmentJobs.css";
import { Button } from "@material-ui/core";
import Image from "../../../common/Image";

export default function RecruitHomeRecruitmentJobs({ data }) {
  return (
    <section className="recruit-home-recruitment-jobs">
      {data.map((item, index) => (
        <div className="recruit-home-recruitment-jobs__card" key={index}>
          <Image
            className="recruit-home-recruitment-jobs__card-image"
            boxShadow={3}
            {...item.image}
          />
          <div className="recruit-home-recruitment-jobs__card-footer">
            <div
              className="recruit-home-recruitment-jobs__card-title"
              dangerouslySetInnerHTML={{ __html: item.title }}
            ></div>
            <p className="recruit-home-recruitment-jobs__card-description">
              {item.description}
            </p>
            <Button
              variant="contained"
              color="primary"
              className="recruit-home-recruitment-jobs__card-button"
            >
              {item.button.title}
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
}
