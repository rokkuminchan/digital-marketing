import React from 'react';
import './RowWithIcon.css'
import { BsFillCircleFill } from "react-icons/bs";

const RowWithIcon = ({data}) => {
    return(
        <div className = "row">
            <div className = "row__icon"><BsFillCircleFill /></div>
            <div className = "row__description">
                <p>{data}</p>
            </div>
        </div>
    )
}
export default RowWithIcon; 