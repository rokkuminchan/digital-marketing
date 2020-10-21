import React from 'react';
import Title from '../../common/Title';
import Description from '../../common/Description';
import Image from '../../common/Image';
import './WebAppForDigital.css';

const WebAppForDigital = ({data}) => {
    return(
        <section className = "webAppForDigital">
            <div className="webAppForDigital__wrapper">
            <div className = "webAppForDigital__title">
                <Title data = {data.title} />
            </div>
            <div className = "webAppForDigital__image">
                <Image  className="digital-image" {...data.image}/>
            </div>
            <div className = "webAppForDigital__desc">
                <Description data = {data.description} />
            </div>
            </div>
        </section>
    )
}
export default WebAppForDigital;