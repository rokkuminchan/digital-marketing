import React from 'react';
import Icon from "../../../common/Icon"
import RowWithIcon from "../../../common/RowWithIcon"
import "./PolicyItem.css"

const Policy = ({data}) => {
    return(
        <div className = "policy-item">
            <div className = "policy-item__icon"><Icon {...data.icon}/></div>
            <div className = "policy-item__title"><h2>{data.title}</h2></div>
            <div className = "policy-item__description">
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