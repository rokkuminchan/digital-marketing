import React from "react";
import BackendPageHeader from "../sections/recruit/backend/BackendPageHeader"
import Breadcrumb from "../sections/recruit/common/Breadcrumb"
import RecruitDetail from "../sections/recruit/common/RecruitDetail";
import DetailEntryButton from "../sections/recruit/common/DetailEntryButton"
import RecruitJobOther from "../sections/recruit/common/JobOther";
import EntryButton from "../common/EntryButton";

export default function Backend({data}){
    return (
    <React.Fragment>
      <BackendPageHeader data={data.Header} />
      <Breadcrumb data={data.Header}/>
      <RecruitDetail data={data.JobDetails} />
      <DetailEntryButton path="./backend/entry" />
      <RecruitJobOther data={data.JobOther}/>
      <EntryButton path="./new-backend/entry" />
      
    </React.Fragment>
    );
}