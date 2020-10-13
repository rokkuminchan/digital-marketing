import React from 'react';
import './RowWithIcon.css'

const RowWithIcon = ({data}) => {
    return(
        <div className = "row">
            <div className = "row__icon"><data.icon /></div>
            <div className = "row__description">
                <p>{data.description}</p>
            </div>
        </div>
    )
}
export default RowWithIcon;