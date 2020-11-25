import React from "react";
import "./RecruitDetailCardTitle.css";
import {useTranslation} from 'react-i18next';

export default function RecruitDetailCardTitle({data}){
    const {t} = useTranslation();
    return <h3 className="detail-title">{t(data)}</h3>;
}