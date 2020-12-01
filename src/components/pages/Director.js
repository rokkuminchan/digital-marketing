import React from "react";
import DirectorPageHeader from "../sections/recruit/director/DirectorPageHeader";
import Breadcrumb from "../sections/recruit/common/Breadcrumb";
import RecruitJobOther from "../sections/recruit/common/JobOther";
import RecruitDetail from "../sections/recruit/common/RecruitDetail";
import DetailEntryButton from "../sections/recruit/common/DetailEntryButton";
import EntryButton from "../common/EntryButton";

export default function Director({ data }) {
  return (
    <React.Fragment>
      <div className = "entry-button-js">
        <DirectorPageHeader data={data.Header} />
        <Breadcrumb data={data.Header} />
        <RecruitDetail data={data.JobDetails} />
        <DetailEntryButton id="recruit-detail__entry" path="/recruit/director/entry" />
      </div>
      <RecruitJobOther data={data.JobOther} />
      <EntryButton detailEntryButtonId="recruit-detail__entry" path="/recruit/director/entry" />
    </React.Fragment>
  );
}
