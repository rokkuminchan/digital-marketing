import React from "react";
import GraduateHeader from "../sections/recruit/new-graduate/GraduateHeader";
import RecruitDetail from "../common/RecruitDetail";
import Breadcrumb from "../sections/recruit/common/Breadcrumb"
import RecruitJobOther from '../sections/recruit/common/JobOther';


export default function Graduate({data}){
    return (
    <React.Fragment>
      <GraduateHeader data={data.graduateHeader} />
      <Breadcrumb data={data.graduateHeader}/>
      <RecruitDetail data={data.recruitDetails}/>
      <RecruitJobOther data={data.JobOther}/>
    </React.Fragment>
    );
}