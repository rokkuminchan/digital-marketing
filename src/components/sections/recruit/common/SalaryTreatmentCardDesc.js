import React from "react";
export default function SalaryTreatmentCardDesc({data}){
    return(
            <div className="stCardDesc">
                <p className="icon">{data.icon}</p>
                <h4 className="stCardDesc__title">{data.subtitle}</h4>
                {data.descriptions.map((desc, index) => {
                    return (
                        <p className="stCardDesc__desc" key={index}>
                            {desc}
                        </p>
                    );
                })}
            </div>
    )
            
}