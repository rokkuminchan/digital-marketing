import React from "react";
import Policy from "../sections/recruit/backend/Policy";

export default function Backend({data}){
    return (
    <React.Fragment>
      <Policy data = {data.DescriptiveIcon}/>
    </React.Fragment>
    );
}