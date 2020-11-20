import React from "react";
import JobPageHeader from "../common/JobPageHeader";
import "./BackendPageHeader.css";


export default function BackendPageHeader({data}) {
 console.log(data);
  return (
    <section className="backend-page-header">
       <JobPageHeader data={data}/>
    </section>
  );
}