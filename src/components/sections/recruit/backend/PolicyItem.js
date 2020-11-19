import React from 'react';
import Icon from "../../../common/Icon"
import RowWithIcon from "../../../common/RowWithIcon"
import "./PolicyItem.css"

const Policy = ({data}) => {
    return(
        <div className = "policy">
            <div className = "policy__icon"><Icon {...data.icon}/></div>
            <div className = "policy__title"><h2>{data.title}</h2></div>
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