import React from 'react';
import PolicyItem from "./PolicyItem"
import RecruitDetailCardTitle from "./RecruitDetailCardTitle";
import "./DetailCard.css"

const Policy = ({ data }) => {
    return (
        <div className="detail-card policy">
            <RecruitDetailCardTitle data={data.title} />
            <div className="policy__content">
                {
                    data.detail.map((item, index) => {
                        return (
                            <PolicyItem key={index} data={item} />
                        )
                    })
                }
            </div>
        </div>

    )
}
export default Policy;