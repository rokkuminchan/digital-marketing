import React from "react";
import AngleIcon from "../../../common/AngleIcon";
import "./JobRequirementCardContent.css";

export default function JobRequirementCardContent({data}){
    return(
            <div className="jrqCardDesc">
                 <div className="jrqCardDesc__title">
                 <AngleIcon data = {data.subtitle} />
                 </div>
                {data.descriptions.map((desc, index) => {
                    return (
                        <p className="jrqCardDesc__desc" key={index}>
                            {desc}
                        </p>
                    );
                })}
            </div>
    )
            
}