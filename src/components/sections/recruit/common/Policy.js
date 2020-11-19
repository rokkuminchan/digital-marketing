import React from 'react';
import PolicyItem from "./PolicyItem"

const Polycy = ({data}) => {
    return(
        <div>
            {
                data.map((item,index) => {
                    return (
                        <PolicyItem key = {index} data = {item} />
                    )
                })
            }
        </div>
    )
}
export default Polycy;