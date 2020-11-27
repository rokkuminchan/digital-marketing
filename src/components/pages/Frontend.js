import React from "react";
import JobPageHeader from "../sections/recruit/common/JobPageHeader";
import Breadcrumb from "../sections/recruit/common/Breadcrumb";
import RecruitDetail from "../sections/recruit/common/RecruitDetail";
import DetailEntryButton from "../sections/recruit/common/DetailEntryButton";
import RecruitJobOther from "../sections/recruit/common/JobOther";
import EntryButton from "../common/EntryButton";

export default function Frontend({ data }) {
<<<<<<< HEAD
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
=======

    return (
        <React.Fragment>
            <JobPageHeader data={data.FrontEndHeader} />
            <Breadcrumb data={data.FrontEndHeader} />
            <RecruitDetail data={data.JobDetails} />
            <DetailEntryButton path="/frontend/entry" />
            <RecruitJobOther data={data.JobOther} />
            <EntryButton path="/frontend/entry" />
        </React.Fragment>
    );
}
>>>>>>> 9457392fa9a210a269ea58a3c7eb94441c513654
