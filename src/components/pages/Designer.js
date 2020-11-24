import React from "react";

import RecruitJobOther from "../sections/recruit/common/JobOther";
import Breadcrumb from "../sections/recruit/common/Breadcrumb";
import JobDescription from "../sections/recruit/common/JobDescription";
import FrontTargetPerson from "../sections/recruit/frontend/FrontTargetPerson";
import Policy from "../sections/recruit/common/Policy";
import JobPageHeader  from "../sections/recruit/common/JobPageHeader";


export default function Designer({ data }) {
  return (
  <React.Fragment>
      <JobPageHeader data= {data.designer.Pageheader}/>
      <Breadcrumb data={data.designer.Pageheader}/>
      <JobDescription data = {data.designer.JobDescription} />
      <FrontTargetPerson data={data.designer.TargetPerson} />
      <Policy data = {data.designer.Policy}/>
      <RecruitJobOther data={data.designer.JobOther}/>
  </React.Fragment>
  );
}
