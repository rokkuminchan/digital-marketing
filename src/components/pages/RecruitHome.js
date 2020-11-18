import React from "react";

import RecruitHomeRecruitmentJobs from "../sections/recruit/home/RecruitHomeRecruitmentJobs";

export default function RecruitHome({ data }) {
  return (
    <React.Fragment>
      <RecruitHomeRecruitmentJobs data={data.RecruitHomeRecruitmentJobs} />
    </React.Fragment>
  );
}
