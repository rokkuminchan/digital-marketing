import React from "react";
import RecruitDetailCardTitle from "./RecruitDetailCardTitle";
import JobRequirementCardContent from "./JobRequirementCardContent.js";
import "./DetailCard.css"
import {useTranslation} from 'react-i18next';

export default function JobRequirementCard({data}){
    const {t} = useTranslation();
    return (
      <div className="detail-card">
        <RecruitDetailCardTitle data={t(data.title)} />
        <div className="jrq__content">
          {data.items.map((desc, index) => {
            return <JobRequirementCardContent key={index} data={desc} />;
          })}
        </div>
      </div>
    );
}