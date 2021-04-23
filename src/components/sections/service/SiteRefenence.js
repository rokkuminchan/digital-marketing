import React from "react";
import "./SiteRefenence.css";
import ALink from "../../common/ALink";

import Title from "../../common/Title";
import Description from "../../common/Description";
import Image from "../../common/Image";
import { useTranslation } from "react-i18next";

export default function SiteReference({ data }) {
    const { t } = useTranslation();

    return (
        <section className="root" >
            <div className="root-child">
                
            <div className="distitle">
                <Title className="title" data={t(data.title)} />
                <Description className="description" data={t(data.description)}/>
            </div>
            <div className="container">
                {data.items.map((item, index) => {
                    return (
                        <div className="paper">
                            <div className="avatar">
                                <div className="avatar-content">
                                    <Image {...item.image} className="avatar-content-child" />
                                </div>
                            </div>
                            <div className="card-title-list">
                                <div>
                                    <div className="card-title">
                                        {item.title}
                                    </div>
                                </div>
                                <div className="button-detail">
                                    <a href={item.link.src} className="button-detail-child" >{t(item.link.subTitle)}
                                    </a>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>

            </div>
        </section>
    )
}