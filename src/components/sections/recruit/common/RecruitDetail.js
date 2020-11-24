import React from "react";
import JdTargetCard from "./JdTargetCard";
import JrqCard from "./JrqCard";
import Policy from "./Policy";
import "./RecruitDetail.css";
export default function RecruitDetail({data}) {
    return(
        <section className="recruit-detail">
            <JdTargetCard data={data.JobDescription} />
            <JrqCard data={data.JobRequirement} />
            <JdTargetCard data={data.TargetPerson} /> 
            <Policy data={data.Policy}  />
            <a href="/recruit/entry" className="recruit-detail__entry">応募する</a>
        </section>
    )
}