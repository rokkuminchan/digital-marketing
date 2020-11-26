import React from "react";
import JobPageHeader from "../common/JobPageHeader";
import "./DesignerHeader.css";


export default function DesignerHeader({data}) {
 console.log(data);
  return (
    <section className="designer-page-header">
       <JobPageHeader data={data}/>
    </section>
  );
}