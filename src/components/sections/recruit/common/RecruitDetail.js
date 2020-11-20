import React from "react";
import JdTargetCard from "./JdTargetCard";
import JrqCard from "./JrqCard";
import SalaryTreatmentCard from "./SalaryTreatmentCard";
import "./RecruitDetail.css";
export default function RecruitDetail({data}) {
    return(
        <section className="recruit-detail">
            <JdTargetCard data={data.JobDescription} />
            <JrqCard data={data.JobRequirement} />
            <JdTargetCard data={data.TargetPerson} /> 
            <SalaryTreatmentCard data={data.SalaryTreatment}  />
            <a href="#" className="recruit-detail__entry">応募する</a>
        </section>
    )
}