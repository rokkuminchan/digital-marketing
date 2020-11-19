import React from "react";
import RecruitHomeHeader from "../sections/recruit/home/RecruitHomeHeader";
import RecruitHomeReason from "../sections/recruit/home/RecruitHomeReason";
import RecruitHomeTargetingPersons from "../sections/recruit/home/RecruitHomeTargetingPersons";
import RecruitHomeRecruitmentJobs from "../sections/recruit/home/RecruitHomeRecruitmentJobs";
import RecruitHomeEntryButton from "../sections/recruit/home/RecruitHomeEntryButton";

export default function RecruitHome({ data }) {
  return (
    <React.Fragment>
      <RecruitHomeHeader />
      <RecruitHomeReason data={data.RecruitHomeReason} />
      <RecruitHomeTargetingPersons data={data.RecruitHomeTargetingPersons} />
      <RecruitHomeRecruitmentJobs data={data.RecruitHomeRecruitmentJobs} />
      <RecruitHomeEntryButton path="/" /> {/* Button to RecruitmentJobs */}
    </React.Fragment>
  );
}
