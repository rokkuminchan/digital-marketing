import React from "react";
import JobPageHeader from "../common/JobPageHeader";
import "./GraduateHeader.css";

export default function GraduateHeader({data}){
    return(
        <section className="graduate-header">
            <JobPageHeader data={data}/>
        </section>

    );
}