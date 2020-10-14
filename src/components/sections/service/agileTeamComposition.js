import React from "react";
import "./AgileTeamComposition.css";
import Title from "../../common/Title";
import AgileTeamCompositionList from "./AgileTeamCompositionList";
// import Description from "../../common/Description";


const AgileTeamComposition = ({data}) =>{
    console.log(data.items)
    return(
        <section className="agileTeamComposition">
           <div className="agileTeamComposition__title">
               <Title data={data.title}/>
           </div>
           <div className="agileTeamComposition__description">
                <p>{data.description}</p>
           </div>
           <br/><hr width="50%" size="5px" color="red"/>
           <div className="agileTeamComposition__items">
            {data.items.map((item, index) => {
            return <AgileTeamCompositionList data={item} key={index}/>
            })}
           </div>
        </section>
    );
}
export default AgileTeamComposition;