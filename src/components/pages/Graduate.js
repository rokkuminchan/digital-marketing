import React from "react";
import GraduateHeader from "../sections/recruit/new-graduate/GraduateHeader";

export default function Graduate({data}){
    return (
    <React.Fragment>
      <GraduateHeader data={data.graduateHeader} />
    </React.Fragment>
    );
}