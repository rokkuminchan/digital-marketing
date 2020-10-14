import React from "react";
import "./AgileTeamCompositionList.css";

export default function AgileTeamCompositionList ({ data }) {
   console.log(data);
    return (
      <div className ="AgileTeamCompositionList">
          <h3>{data.title}</h3>
          <br/>
        <p>{data.description}</p>
      </div>
    );
}