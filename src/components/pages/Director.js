import React from "react";
import DirectorPageHeader from "../sections/recruit/director/DirectorPageHeader"
import Breadcrumb from "../sections/recruit/common/Breadcrumb"
import Policy from "../sections/recruit/common/Policy"
import RecruitJobOther from "../sections/recruit/common/JobOther";
import RecruitDetail from "../sections/recruit/common/RecruitDetail";
import EntryButton from "../common/EntryButton";

export default function Director({ data }) {
  
  return (
  <React.Fragment>
      <DirectorPageHeader data={data.Header}/>
      <Breadcrumb data={data.Header}/>
      <RecruitDetail data={data.JobDetails} />
      <RecruitJobOther data={data.JobOther}/>
      <EntryButton path="./entry" />
  </React.Fragment>
  );
}
