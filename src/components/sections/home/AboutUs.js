import React from 'react';
import Title from '../../common/Title'
import Description from '../../common/Description'
import Image from '../../common/Image'
import './AbousUs.css'
import { useTranslation } from "react-i18next";

const AboutUs = ({data}) => {
    const { t } = useTranslation();
    return(
        <section className = "about-us">
            <svg viewBox="0 0 460.72551481332135 532"><path fill="#72AED3" d="M230.36275740666068 0L460.72551481332135 133L460.72551481332135 399L230.36275740666068 532L0 399L0 133Z" /></svg>
            <div className = "about-us__title">
                <Title data = {t(data.title)} />
            </div>
            <div className = "about-us__subtitle">
                <Description data = {t(data.subtitle)} />
            </div>
            <div className = "about-us__image-inner">
                {
                    data.images.map((item,index) => {
                        return (
                            <Image className = "about-us__image" key= {index} {...item} />
                        )
                    })
                } 
            </div>
            <div className = "about-us__description">
                {
                    data.descriptions.map((item,index) => {
                        return (
                            <Description key= {index} data = {t(item)} />
                        )
                    })
                } 
            </div>
        </section>
    )
}
export default AboutUs;