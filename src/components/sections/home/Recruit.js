import React from 'react';
import './Recruit.css'
import Title from '../../common/Title';
import Description from '../../common/Description';
import Image from '../../common/Image';
import { useTranslation } from "react-i18next";


const Recruit = ({data}) => {
    const { t } = useTranslation();
    return (
        <section className = "recruit">
            <div className="recruit__title">
                <Title data={t(data.title)} />
            </div>
            <div className="recruit__subtitle">
                <Description data={t(data.subtitle)} />
            </div>
            <Image className="recruit__image" {...data.image} />

                
            <div className = "recruit-items">
                    {data.items.map((item,index)=>(
                        <div className = "recruit-items-box" key = {index}>
                            <div className ="container">
                                <Image className ="item-icon" {...item.image} />
                                <Title data={t(item.title)} />
                                <Description data={t(item.description)} />
                                <hr width="80%" size="2px" color="#373F41" />
                            </div> 
                        </div>
                    ))}
            </div>
        </section>
    )
}
export default Recruit;