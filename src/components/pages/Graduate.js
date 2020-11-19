import React from "react";
import GraduateHeader from "../sections/recruit/new-graduate/GraduateHeader";
import RecruitDetail from "../common/RecruitDetail";


export default function Graduate({data}){
    return (
    <React.Fragment>
      <GraduateHeader data={data.graduateHeader} />
      <RecruitDetail data={data.recruitDetails}/>
    </React.Fragment>
    );
}