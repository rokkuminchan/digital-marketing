import React from "react";
import BackendPageHeader from "../sections/recruit/backend/BackendPageHeader"
import Breadcrumb from "../sections/recruit/common/Breadcrumb"
import RecruitDetail from "../sections/recruit/common/RecruitDetail";
import RecruitJobOther from "../sections/recruit/common/JobOther";

export default function Backend({data}){
    return (
    <React.Fragment>
      <BackendPageHeader data={data.Header} />
      <Breadcrumb data={data.Header}/>
      <RecruitDetail data={data.JobDetails} />
      <RecruitJobOther data={data.JobOther}/>
    </React.Fragment>
    );
}