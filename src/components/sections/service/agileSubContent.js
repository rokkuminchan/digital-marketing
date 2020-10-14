import React from "react";
import "./agileSubContent.css";

export default function AgileSubContent ({data}){
    return(
        <div className="agile-sub-content">
            <h4 className="agile-sub-content__title">{data.title}</h4>
            <p className="agile-sub-content__description">{data.description}</p>
        </div>
    );
}