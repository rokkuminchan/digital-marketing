import React from 'react';
import Title from '../../common/Title'
import Description from '../../common/Description'
import Image from '../../common/Image'
import { useTranslation } from "react-i18next";
import "./Characteristic.css"

const Characteristic = ({data}) => {
    const { t } = useTranslation();
    return(
        <section className = "characteristic">
            
            {data.map((item,index) => {
            return <div className="characteristic__container" data={item} key={index} >
                        <div className ="characteristic__wrap">
                            <div className = "characteristic__title">
                                <Title data={t(item.title)}/>
                            </div>
                            <div className="characteristic__card">
                                <div className="characteristic__cardBx">
                                    <figure>
                                    <   div className ="solution"></div>
                                        <Image className ="characteristic__img"{...item.image}/>
                                        <figcaption>
                                            <Description data={t(item.description)}/>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
            })}
        </section>
    )
}
export default Characteristic;