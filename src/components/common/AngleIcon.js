import React from 'react';
import './RowWithIcon.css'
import { FaAngleDoubleRight } from "react-icons/bs";

const AngleIcon = ({data}) => {
    return(
        <div className = "row">
            <div className = "row__icon"><FaAngleDoubleRight /></div>
            <div className = "row__description">
                <p>{data}</p>
            </div>
        </div>
    )
}
export default AngleIcon; 

