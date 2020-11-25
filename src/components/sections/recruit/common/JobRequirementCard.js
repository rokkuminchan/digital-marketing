import React from "react";
import RecruitDetailCardTitle from "./RecruitDetailCardTitle";
import JobRequirementCardContent from "./JobRequirementCardContent.js";
import "./DetailCard.css"
export default function JobRequirementCard({data}){
    return(
        <div className="detail-card requirement">
            <RecruitDetailCardTitle data={data.title} />
            <div className="jrq__content">
                {
                    data.items.map((desc, index) => {
                        return <JobRequirementCardContent key={index} data={desc} />;
                    })
                }
            </div>

         </div>
    )
}