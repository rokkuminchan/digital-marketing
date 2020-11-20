import React from "react";
export default function JrqCardDesc({data}){
    return(
            <div className="jrqCardDesc">
                 <h4 className="jrqCardDesc__title">{data.subtitle}</h4>
                {data.descriptions.map((desc, index) => {
                    return (
                        <p className="jrq-card__desc" key={index}>
                            {desc}
                        </p>
                    );
                })}
            </div>
    )
            
}