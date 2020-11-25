import React from "react";
import TargetPersonCard from "./TargetPersonCard";
import JobDescriptionCard from "./JobDescriptionCard";
import JobRequirementCard from "./JobRequirementCard";
import Policy from "./Policy";
import "./RecruitDetail.css";
export default function RecruitDetail({data}) {
    return(
        <section className="recruit-detail">
            <JobDescriptionCard data={data.JobDescription} />
            <JobRequirementCard data={data.JobRequirement}/>
            <TargetPersonCard data={data.TargetPerson} /> 
            <Policy data={data.Policy} />
            <a href="/recruit/entry" className="recruit-detail__entry">応募する</a>
        </section>
    )
}