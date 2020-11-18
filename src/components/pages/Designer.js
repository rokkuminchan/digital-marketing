import React from "react";
import RecruitJobOther from "../sections/recruit/common/jobOther";

export default function Director({ data }) {
  return (
  <React.Fragment>
      <RecruitJobOther data={data.JobOther}/>
  </React.Fragment>
  );
}
