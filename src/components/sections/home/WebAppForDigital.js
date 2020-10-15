import React from 'react';
import Title from '../../common/Title'
import Description from '../../common/Description'
import Image from '../../common/Image'

const WebAppForDigital = ({data}) => {
    return(
        <section className = "webAppForDigital">
            <div className = "webAppForDigital__title">
                <Title data = {data.title} />
            </div>
            <div className = "webAppForDigital__image">
                <Image {...data.image}/>
            </div>
            <div className = "webAppForDigital__description">
                <Description data = {data.description} />
            </div>
        </section>
    )
}
export default WebAppForDigital;