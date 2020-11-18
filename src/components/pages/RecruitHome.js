import React from "react";
import RecruitHomeHeader from "../sections/recruit/home/RecruitHomeHeader";

import RecruitHomeRecruitmentJobs from "../sections/recruit/home/RecruitHomeRecruitmentJobs";

export default function RecruitHome({ data }) {
  return (
    <React.Fragment>
      <RecruitHomeHeader/>
      <RecruitHomeRecruitmentJobs data={data.RecruitHomeRecruitmentJobs} />
    </React.Fragment>
  );
}
