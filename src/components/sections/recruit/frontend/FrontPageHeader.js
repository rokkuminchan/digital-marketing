import React from "react";
import JobPageHeader from "../common/JobPageHeader";
import "./FrontPageHeader.css";


export default function FrontPageHeader({data}) {

  return (
    <section className="front-page-header">
       <JobPageHeader data={data}/>
    </section>
  );
}
