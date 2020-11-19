import React from "react";
import RecruitHomeHeader from "../sections/recruit/home/RecruitHomeHeader";
import RecruitHomeReason from "../sections/recruit/home/RecruitHomeReason";

import RecruitHomeRecruitmentJobs from "../sections/recruit/home/RecruitHomeRecruitmentJobs";

export default function RecruitHome({ data }) {
  return (
    <React.Fragment>
      <RecruitHomeHeader/>
      <RecruitHomeReason data={data.RecruitHomeReason}/>
      <RecruitHomeRecruitmentJobs data={data.RecruitHomeRecruitmentJobs} />
    </React.Fragment>
  );
}
