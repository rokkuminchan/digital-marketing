import React from 'react';
import Icon from "../../../common/Icon"
import RowWithIcon from "../../../common/RowWithIcon"
import "./policy.css"

const Policy = ({data}) => {
    return(
        <div className = "policy">
            <div className = "policy__icon"><Icon {...data.icon}/></div>
            <div className = "policy__title"><p>{data.title}</p></div>
            <div className = "policy__description">
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
export default Policy;