import React from "react";
import "./agileTeamComposition.css";
import Title from "../../common/Title";
// import Description from "../../common/Description";


export default function AgileTeamComposition ({data}){
    return(
        <section className="agileTeamComposition">
           <div className="agileTeamComposition__title">
               <Title data={data.title}/>
           </div>
           <div className="agileTeamComposition__description">
                <p>{data.description}</p>
           </div>
           <div className="agileTeamComposition__items">
            {data.items.map((item, index) => {
            return <div key={index} data={item} className="agileTeamComposition__items-bg"> 
            </div>;
            })}
            </div>
        </section>
    );
}