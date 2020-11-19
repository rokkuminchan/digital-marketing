import React from 'react';
import PolicyItem from "./PolicyItem"

const Polycies = ({data}) => {
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
export default Polycies;