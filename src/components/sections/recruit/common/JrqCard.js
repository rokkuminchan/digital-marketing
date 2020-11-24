import React from "react";
import RecruitDetailCardTitle from "./RecruitDetailCardTitle";
import JrqCardDesc from "./JrqCardDesc";
import "./DetailCard.css"
export default function JrqCard({data}){
    return(
        <div className="detail-card requirement">
            <RecruitDetailCardTitle data={data.title} />
            <div className="jrq__desc">
                {
                    data.items.map((desc, index) => {
                        return <JrqCardDesc key={index} data={desc} />;
                    })
                }
            </div>

         </div>
    )
}