import React from 'react';
import RowWithIcon from '../../common/RowWithIcon'
import './WebAppReqItem.css'

const WebAppReqItem = ({data}) => {
    return(
        <div>
            <div>
                <h3>{data.title}</h3>
            </div>
            <div>
                {
                    data.row.map((item,index) => {
                        return (
                            <RowWithIcon key = {index} data = {item} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default WebAppReqItem;