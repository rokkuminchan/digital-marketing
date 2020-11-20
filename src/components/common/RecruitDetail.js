import React from "react";
import RecruitDetailCard from "./RecruitDetailCard";
import "./RecruitDetail.css";
export default function RecruitDetail({data}) {
    return(
        <section className="recruit-detail">
             <div className="recruit-detail__list">
                {data.map((detail, index) => {
                    return <RecruitDetailCard key={index} data={detail} />;
                 })}
            </div>
            <a href="#" className="recruit-detail__entry">応募する</a>
        </section>
    )
}