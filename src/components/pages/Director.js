import React from "react";
import PageHeader from "../sections/recruit/director/DirectorPageHeader"

export default function Director({ data }) {
  return (
  <React.Fragment>
      <PageHeader data={data.recuitDirector}/>
  </React.Fragment>
  );
}
