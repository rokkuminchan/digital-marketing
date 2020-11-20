import React from 'react';
import RecruitDetailCardTitle from "../../../common/RecruitDetailCardTitle"
import RowWithIcon from "../../../common/RowWithIcon"
import "./TargetPerson.css"

const TargetPerson = ({data}) => {
    return(
        <section className = "target-person">
            <RecruitDetailCardTitle data={data.title} />
            <div className = "target-person__detail">
                {
                    data.description.map((item,index) => {
                        return (
                            <RowWithIcon key = {index} data = {item} />
                        )
                    })
                }
            </div>
        </section>
    )
}
export default TargetPerson;