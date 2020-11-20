import React from "react";
import DirectorPageHeader from "../sections/recruit/director/DirectorPageHeader"
import JobDescription from "../sections/recruit/common/JobDescription";
import Breadcrumb from "../sections/recruit/common/Breadcrumb"
import TargetPerson from "../sections/recruit/common/TargetPerson"
import Policy from "../sections/recruit/common/Policy"
import RecruitJobOther from "../sections/recruit/common/JobOther";


export default function Director({ data }) {
  
  return (
  <React.Fragment>
      <DirectorPageHeader data={data.Header}/>
      <Breadcrumb data={data.Header}/>
      <JobDescription data ={data.JobDescription}/>
      <TargetPerson data = {data.TargetPerson} />
      <Policy data = {data.Policy}/>
      <RecruitJobOther data={data.JobOther}/>
  </React.Fragment>
  );
}
