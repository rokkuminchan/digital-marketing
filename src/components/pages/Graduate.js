import React from "react";
import RecruitDetail from "../sections/recruit/common/RecruitDetail";
import JobPageHeader from "../sections/recruit/common/JobPageHeader";
import RecruitJobOther from "../sections/recruit/common/jobOther";

export default function Graduate({data}){
    return (
    <React.Fragment>
      <JobPageHeader data={data.graduateHeader} />
      <RecruitDetail data={data.JobDetails} />
      <RecruitJobOther data={data.JobOther} />
    </React.Fragment>
    );
}