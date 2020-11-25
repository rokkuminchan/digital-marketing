import React from "react";
import RecruitDetailCardTitle from "./RecruitDetailCardTitle";
import RowWithIcon from "../../../common/RowWithIcon"
import "./DetailCard.css"
import {useTranslation} from 'react-i18next';

export default function JobDescriptionCard({data}){
    const {t} = useTranslation();
    return(
        <div className="detail-card">
            <RecruitDetailCardTitle data={t(data.title)} />
            <div className = "jd__content">
                {data.descriptions.length > 1 ? data.descriptions.map((item, index) => {
                    return (
                        
                        <RowWithIcon key = {index} data = {item} />
                    )
                }): data.descriptions.map((item) => {
                    return (
                        <p className="jd__desc">{t(item)}</p>
                    )
                })
                }
            </div>
        </div>
    )
}