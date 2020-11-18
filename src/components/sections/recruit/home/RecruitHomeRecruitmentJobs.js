import React from "react";
import { Button } from "@material-ui/core";

export default function RecruitHomeRecruitmentJobs({ data }) {
  return (
    <section className="recruit-home-recruitment-jobs">
      {data.map((item, index) => (
        <div className="recruit-home-recruitment-jobs__cards" key={index}>
          <div className="recruit-home-recruitment-jobs__cards-image">
            <div className="recruit-home-recruitment-jobs__cards-image-title">
              {item.title}
            </div>
          </div>
          <p className="recruit-home-recruitment-jobs__description">
            {item.description}
          </p>
          <Button variant="contained" color="primary">
            {item.button.title}
          </Button>
        </div>
      ))}
    </section>
  );
}
