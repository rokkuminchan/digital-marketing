import React from "react";
import RecruitDetailCardTitle from "./RecruitDetailCardTitle";
import "./DetailCard.css"
export default function JdTargetCard({data}){
    return(
        <div className="detail-card">
            <RecruitDetailCardTitle data={data.title} />
            {data.descriptions.map((item, index) => {
                return (
                <p className="jd-tg-card__desc" key={index}>
                    {item}
                </p>
                 );
            })}
        </div>
    )
}