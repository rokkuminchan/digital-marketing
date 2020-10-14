import React from "react";
import "./agileTeamComposition.css";
import Title from "../../common/Title";
import Description from "../../common/Description";
import AgileSubContent from "./agileSubContent";

export default function AgileTeamComposition ({data}){
    return(
        <section className="agile-team-composition">
            <div className="agile-team-composition__imgbg">
                <Title data={data.title}/>
                <Description data={data.description} />
            </div>
            <div className="agile-team-composition__items">
                    {data.items.map((item, index) => {
                        return <AgileSubContent key={index} data={item}/>
                    })}
            </div>
        </section>
    );
}