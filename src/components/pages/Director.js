import React from "react";
import PageHeader from "../sections/recruit/director/DirectorPageHeader"
import JobDescription from "../sections/recruit/director/JobDescription";

export default function Director({ data }) {
  return (
  <React.Fragment>
      <PageHeader data={data.recuitDirector}/>
      <JobDescription data={data.recuitDirector}/>
  </React.Fragment>
  );
}
