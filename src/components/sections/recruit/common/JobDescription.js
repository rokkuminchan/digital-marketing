import React from 'react';
import RecruitDetailCardTitle from "../common/RecruitDetailCardTitle"
import RowWithIcon from "../../../common/RowWithIcon"
import "./JobDescription.css"

const JobDescription = ({data}) => {
    return(
        <div className = "job-description">
            <RecruitDetailCardTitle data={data.title} />
            <div className = "job-description__detail">
                {
                    data.description.map((item,index) => {
                        return (
                            <RowWithIcon key = {index} data = {item} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default JobDescription;