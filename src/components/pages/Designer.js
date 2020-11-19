import React from "react";
import RecruitJobOther from "../sections/recruit/designer/jobOther";

export default function Designer({ data }) {
  return (
  <React.Fragment>
      <RecruitJobOther data={data.designer.JobOther}/>
  </React.Fragment>
  );
}
