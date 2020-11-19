import React from 'react';
import PolicyItem from "./PolicyItem"
import RecruitDetailCardTitle from "../../../common/RecruitDetailCardTitle"
import "./Policy.css"

const Polycy = ({data}) => {
    return(
        <div className = "policy">
            <RecruitDetailCardTitle data = {data.title}/>
            <div className = "policy__content">
                {
                    data.detail.map((item,index) => {
                        return (
                            <PolicyItem key = {index} data = {item} />
                        )
                    })
                }
            </div>
        </div>
        
    )
}
export default Polycy;