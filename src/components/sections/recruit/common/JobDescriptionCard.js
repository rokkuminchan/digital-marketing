import React from "react";
import RecruitDetailCardTitle from "./RecruitDetailCardTitle";
import RowWithIcon from "../../../common/RowWithIcon"
import "./DetailCard.css"

export default function JobDescriptionCard({data}){
    return(
        <div className="detail-card .job-description">
            <RecruitDetailCardTitle data={data.title} />
            <div className = "detail-card__desc">
                {data.descriptions.map((item, index) => {
                    return (
                        <RowWithIcon key = {index} data = {item} />
                    )
                })}
            </div>
        </div>
    )
}