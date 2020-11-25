import React from "react";
import RecruitDetailCardTitle from "./RecruitDetailCardTitle";
import RowWithIcon from "../../../common/RowWithIcon"
import "./DetailCard.css"
import {useTranslation} from 'react-i18next';

export default function JobDescriptionCard({data}){
    const {t} = useTranslation();
    return (
      <div className="detail-card .job-description">
        <RecruitDetailCardTitle data={t(data.title)} />
        <div className="detail-card__desc">
          {data.descriptions.map((item, index) => {
            return <RowWithIcon key={index} data={item} />;
          })}
        </div>
      </div>
    );
}