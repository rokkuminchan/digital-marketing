import React from 'react';
import Title from '../../common/Title'
import Image from '../../common/Image'
import WebAppReqItem from './WebAppReqItem'

const WebAppRequirment = ({data}) => {
    return(
        <div>
            <div>
                <Title data = {data.title}/>
            </div>
            <div>
                <Image {...data.image}/>
            </div>
            <div>
                {
                    data.items.map((item, index) => {
                        return (
                            <WebAppReqItem key = {index} data = {item} />
                        )
                    })
                }
            </div>
            <div>
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