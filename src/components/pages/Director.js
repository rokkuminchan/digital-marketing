import React from "react";
import DirectorPageHeader from "../sections/recruit/director/DirectorPageHeader"
import Breadcrumb from "../sections/recruit/common/Breadcrumb"
import JobDescription from "../sections/recruit/common/JobDescriptionCard";
import JobRequirement from "../sections/recruit/common/JobRequirementCard";
import TargetPerson from "../sections/recruit/common/TargetPersonCard"
import Policy from "../sections/recruit/common/Policy"
import RecruitJobOther from "../sections/recruit/common/JobOther";


export default function Director({ data }) {
  
  return (
  <React.Fragment>
      <DirectorPageHeader data={data.Header}/>
      <Breadcrumb data={data.Header}/>
      <JobDescription data ={data.JobDescription}/>
      <JobRequirement data = {data.JobRequirement}/>
      <TargetPerson data = {data.TargetPerson} />
      <Policy data = {data.Policy}/>
      <RecruitJobOther data={data.JobOther}/>
  </React.Fragment>
  );
}
