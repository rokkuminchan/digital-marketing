import React from "react";

import RecruitJobOther from "../sections/recruit/common/JobOther";
import Breadcrumb from "../sections/recruit/common/Breadcrumb";
import RecruitDetail from "../sections/recruit/common/RecruitDetail";
import JobPageHeader  from "../sections/recruit/common/JobPageHeader";
import EntryButton from "../common/EntryButton";


export default function Designer({ data }) {
  return (
  <React.Fragment>
      <JobPageHeader data= {data.designer.Pageheader}/>
      <Breadcrumb data={data.designer.Pageheader}/>
      <RecruitDetail data={data.designer.JobDetails} />
      <RecruitJobOther data={data.designer.JobOther}/>
      <EntryButton path="./entry" />
  </React.Fragment>
  );
}
