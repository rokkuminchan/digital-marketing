import React from 'react';
import Title from '../../common/Title';
import Description from '../../common/Description';
import Image from '../../common/Image';
import './WebAppForDigital.css';
import { useTranslation } from "react-i18next";

const WebAppForDigital = ({data}) => {
    const { t } = useTranslation();
    return(
        <section className = "webAppForDigital">
            <div className="webAppForDigital__wrapper">
            <div className = "webAppForDigital__title">
                <Title data = {t(data.title)} />
            </div>
            <div className = "webAppForDigital__image">
                <Image  className="digital-image" {...data.image}/>
            </div>
            <div className = "webAppForDigital__desc">
                <Description data = {t(data.description)} />
            </div>
            </div>
        </section>
    )
}
export default WebAppForDigital;