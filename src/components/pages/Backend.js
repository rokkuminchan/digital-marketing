import React from "react";
import BackendPageHeader from "../sections/recruit/backend/BackendPageHeader"
import Breadcrumb from "../sections/recruit/common/Breadcrumb"
import JobDescription from "../sections/recruit/common/JobDescription"
import TargetPerson from "../sections/recruit/common/TargetPerson"
import Policy from "../sections/recruit/common/Policy";
import RecruitJobOther from "../sections/recruit/common/JobOther";

export default function Backend({data}){
    return (
    <React.Fragment>
      <BackendPageHeader data={data.Header} />
      <Breadcrumb data={data.Header}/>
      <JobDescription data = {data.JobDescription} />
      <TargetPerson data = {data.TargetPerson} />
      <Policy data = {data.Policy}/>
      <RecruitJobOther data={data.JobOther}/>
    </React.Fragment>
    );
}