import React from "react";
import DirectorPageHeader from "../sections/recruit/director/DirectorPageHeader"
import JobDescription from "../sections/recruit/director/JobDescription";

export default function Director({ data }) {
  
  return (
  <React.Fragment>
      <DirectorPageHeader data={data.Header}/>
      <JobDescription />
  </React.Fragment>
  );
}
