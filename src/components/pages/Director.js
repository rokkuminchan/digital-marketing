import React from "react";
import DirectorPageHeader from "../sections/recruit/director/DirectorPageHeader"
import JobDescription from "../sections/recruit/director/JobDescription";
import Breadcrumb from "../sections/recruit/common/Breadcrumb"

export default function Director({ data }) {
  
  return (
  <React.Fragment>
      <DirectorPageHeader data={data.Header}/>
      <Breadcrumb data={data.Header}/>
      <JobDescription data ={data.JobDescription}/>
  </React.Fragment>
  );
}
