import React from 'react';
import PolicyItem from "./PolicyItem"
import RecruitDetailCardTitle from "./RecruitDetailCardTitle";
import "./DetailCard.css";
import {useTranslation} from 'react-i18next';

const Policy = ({ data }) => {
    const {t} = useTranslation();
    return (
      <div className="detail-card">
        <RecruitDetailCardTitle data={t(data.title)} />
        <div className="policy__content">
          {data.detail.map((item, index) => {
            return <PolicyItem key={index} data={item} />;
          })}
        </div>
      </div>
    );
}
export default Policy;