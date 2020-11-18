import React from "react";
import Breadcrumb from "./Breadcrumb";
import "./JobDescription.css";


export default function JobDescription({data}) {
  console.log({data})
  return (
    <section className="job-description">
       <Breadcrumb/>
       <div className ="job-description-container">
       </div>
    </section>
  );
}
