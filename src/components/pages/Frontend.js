import React from "react";
import JobPageHeader from "../sections/recruit/common/JobPageHeader";
import Breadcrumb from "../sections/recruit/common/Breadcrumb";
import RecruitDetail from "../sections/recruit/common/RecruitDetail";
import DetailEntryButton from "../sections/recruit/common/DetailEntryButton";
import RecruitJobOther from "../sections/recruit/common/JobOther";
import EntryButton from "../common/EntryButton";

export default function Frontend({ data }) {
  return (
    <React.Fragment>
      <JobPageHeader data={data.FrontEndHeader} />
      <Breadcrumb data={data.FrontEndHeader} />
      <RecruitDetail data={data.JobDetails} />
      <DetailEntryButton path="/recruit/frontend/entry" />
      <RecruitJobOther data={data.JobOther} />
      <EntryButton path="/recruit/frontend/entry" />
    </React.Fragment>
  );
}
