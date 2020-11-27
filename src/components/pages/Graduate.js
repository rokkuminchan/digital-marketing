import React from "react";
import JobPageHeader from "../sections/recruit/common/JobPageHeader";
import Breadcrumb from "../sections/recruit/common/Breadcrumb";
import RecruitDetail from "../sections/recruit/common/RecruitDetail";
import DetailEntryButton from "../sections/recruit/common/DetailEntryButton";
import RecruitJobOther from "../sections/recruit/common/JobOther";
import EntryButton from "../common/EntryButton";

export default function Graduate({ data }) {
  return (
    <React.Fragment>
      <JobPageHeader data={data.graduateHeader} />
      <Breadcrumb data={data.graduateHeader} />
      <RecruitDetail data={data.JobDetails} />
      <DetailEntryButton path="/recruit/new-graduate/entry" />
      <RecruitJobOther data={data.JobOther} />
      <EntryButton path="/recruit/new-graduate/entry" />
    </React.Fragment>
  );
}
