import React from 'react';
import Icon from '../../common/Icon'
import './WebAppReqItem.css'

const WebAppReqItem = ({data}) => {
    return(
        <div className = "web-app-req-item">
            <div className = "web-app-req-icon">
                <Icon {...data.icon} />
            </div>
            <div className = "web-app-req-item__title">
                <h3>{data.title}</h3>
            </div>
            <div className = "web-app-req-item__description">
                {
                    data.descriptions.map((item,index) => {
                        return (
                            <p key = {index}>{item}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default WebAppReqItem;