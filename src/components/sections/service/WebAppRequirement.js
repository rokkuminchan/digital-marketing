import React from 'react';
import Title from '../../common/Title'
import NewImage from '../../common/NewImage'
import WebAppReqItem from './WebAppReqItem'
import './WebAppRequirement.css'

const WebAppRequirment = ({data}) => {
    return(
        <div className = "web-app-requirment">
            <div className = "web-app-requirment__title">
                <Title data = {data.title}/>
            </div>
            <div className = "web-app-requirment__image">
                <NewImage {...data.image}/>
            </div>
            <div className = "web-app-requirment__content">
                {
                    data.items.map((item, index) => {
                        return (
                            <WebAppReqItem key = {index} data = {item} />
                        )
                    })
                }
            </div>
            <div className = "web-app-requirment__comment">
                {
                    data.comment.map((item,index) => {
                        return(
                            <p key = {index}>{item}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default WebAppRequirment;