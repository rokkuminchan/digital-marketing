import React from 'react';
import RowWithIcon from '../../common/RowWithIcon'
import './WebAppReqItem.css'

const WebAppReqItem = ({data}) => {
    return(
        <div>
            <div>
                {
                    data.title.map((item,index) => {
                        return(
                            <h3 key = {index}>{item}</h3>
                        )
                    })
                }
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