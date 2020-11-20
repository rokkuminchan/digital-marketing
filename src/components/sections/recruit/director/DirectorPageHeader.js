import React from "react";
import JobPageHeader from "../common/JobPageHeader";
import "./DirectorPageHeader.css";


export default function DirectorPageHeader({data}) {
 
  return (
    <section className="director-page-header">
       <JobPageHeader data={data}/>
    </section>
  );
}
