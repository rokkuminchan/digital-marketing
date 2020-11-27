import React from 'react';
import Icon from '../../common/Icon'
import './WebAppReqItem.css'
import { useTranslation } from "react-i18next";

const WebAppReqItem = ({data}) => {
    const { t } = useTranslation();
    return(
        <div className = "web-app-req-item">
            <div className = "web-app-req-item__title">
                <h3>{t(data.title)}</h3>
            </div>
            <div className = "web-app-req-item__content">
                <div className = "web-app-req-item__icon">
                    <Icon {...data.icon} />
                </div>
                <div className = "web-app-req-item__description">
                    {
                        data.descriptions.map((item,index) => {
                            return (
                                <p key = {index}>{t(item)}</p>
                            )
                        })
                    }
                </div>
                <div className = "web-app-req-item__line">
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default WebAppReqItem;