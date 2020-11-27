import React from "react";
import "./AgileTeamComposition.css";
import Title from "../../common/Title";
import AgileTeamCompositionList from "./AgileTeamCompositionList";
import {useTranslation} from 'react-i18next';


const AgileTeamComposition = ({data}) =>{
    const {t} = useTranslation();
    return(
        <section className="agileTeamComposition">
           <div className="agileTeamComposition__title">
               <Title data={t(data.title)}/>
           </div>
           <div className="agileTeamComposition__description">
                <p>{t(data.description)}</p>
           </div>
           <br/><hr width="50%" size="5px" color="#78acfd"/>
           <div className="agileTeamComposition__items">
            {data.items.map((item, index) => {
            return <div className ="items-container">
                        <AgileTeamCompositionList data={item} key={index}/>
            <div className ="items-content"><p>{t(item.subtitle)}</p></div>
                    </div>
            })}
           </div>
        </section>
    );
}
export default AgileTeamComposition;