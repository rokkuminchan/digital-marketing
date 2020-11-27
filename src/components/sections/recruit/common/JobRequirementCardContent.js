import React from "react";
import AngleIcon from "../../../common/AngleIcon";
import "./JobRequirementCardContent.css";
import { useTranslation } from 'react-i18next';

export default function JobRequirementCardContent({ data }) {
    const { t } = useTranslation();

    return (
        <div className="jrqCardDesc">
            <div className="jrqCardDesc__title">
                <AngleIcon data={t(data.subtitle)} />
            </div>
            {data.descriptions.map((desc, index) => {
                return (
                    <p className="jrqCardDesc__desc" key={index}>
                        {t(desc)}
                    </p>
                );
            })}
        </div>
    )

}