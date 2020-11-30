import React from "react";

import RecruitJobOther from "../sections/recruit/common/JobOther";
import Breadcrumb from "../sections/recruit/common/Breadcrumb";
import RecruitDetail from "../sections/recruit/common/RecruitDetail";
import DetailEntryButton from "../sections/recruit/common/DetailEntryButton";
import DesignerHeader from "../sections/recruit/designer/DesignerHeader";
import EntryButton from "../common/EntryButton";

export default function Designer({ data }) {
  return (
    <React.Fragment>
      <div className = "entry-button-js">
        <DesignerHeader data={data.designer.Pageheader} />
        <Breadcrumb data={data.designer.Pageheader} />
        <RecruitDetail data={data.designer.JobDetails} />
        <DetailEntryButton id="recruit-detail__entry" path="/recruit/designer/entry" />
      </div>
      <RecruitJobOther data={data.designer.JobOther} />
      <EntryButton detailEntryButtonId="recruit-detail__entry" path="/recruit/designer/entry" />
    </React.Fragment>
  );
}
