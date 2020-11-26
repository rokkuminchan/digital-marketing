import React from "react";
import TargetPersonCard from "./TargetPersonCard";
import JobDescriptionCard from "./JobDescriptionCard";
import JobRequirementCard from "./JobRequirementCard";
import Policy from "./Policy";
import "./RecruitDetail.css";
import {useTranslation} from 'react-i18next';

export default function RecruitDetail({data}) {
    const {t} = useTranslation();
    return (
      <section className="recruit-detail">
        <JobDescriptionCard data={data.JobDescription} />
        {data.JobRequirement ? (
          <JobRequirementCard data={data.JobRequirement} />
        ) : null}
        <TargetPersonCard data={data.TargetPerson} />
        <Policy data={data.Policy} />
      </section>
    );
}