import React from 'react'
import "./DesciptiveIcon.css"

export default function DecriptiveIcon({data}){
    console.log(data);
    return(
        <div className="descriptive-icon">
           <div className = "descriptive-icon__wrap">
                <img
                    src={data.icon.src} alt={data.icon.alt}
                    />
           </div>
        <p className="descriptive-icon__description" >{data.description}</p>
        </div>
    );
}