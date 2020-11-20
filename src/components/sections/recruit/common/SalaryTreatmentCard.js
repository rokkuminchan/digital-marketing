import React from "react";
import RecruitDetailCardTitle from "./RecruitDetailCardTitle";
import SalaryTreatmentCardDesc from "./SalaryTreatmentCardDesc";
import "./DetailCard.css"
export default function SalaryTreatmentCard({data}){
    return(
        <div className="detail-card">
            <RecruitDetailCardTitle data={data.title} />
            <div className="st-item">
                {data.items.map((desc, index) => {
                    return <SalaryTreatmentCardDesc key={index} data={desc} />;
                })}
            </div>

         </div>
    )
}