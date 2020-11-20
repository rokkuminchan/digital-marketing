import React from "react";
import RowWithIcon from "../../../common/RowWithIcon";
import RecruitDetailCardTitle from "../common/RecruitDetailCardTitle";
import "./FrontTargetPerson.css";

export default function FrontTargetPersons({data}){
    return(
        <section className="front-target-person">
            <div className="front-target-person__title">
            <RecruitDetailCardTitle data={data.title}/>
            </div>
            <div className = "front-target-person__description">
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