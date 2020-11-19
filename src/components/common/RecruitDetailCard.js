import React from "react";
import RecruitDetailCardTitle from "./RecruitDetailCardTitle";
import "./RecruitDetailCard.css"
export default function RecruitDetailCard({data}){
    return(
        <div className="recruit-card">
            <RecruitDetailCardTitle data={data.title} />
            <p className="__description">{data.description}</p>
        </div>
    )
}