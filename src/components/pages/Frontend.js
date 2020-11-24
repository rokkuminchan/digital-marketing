import React from "react";
import FrontPageHeader from "../sections/recruit/frontend/FrontPageHeader";
import Breadcrumb from "../sections/recruit/common/Breadcrumb";
import FrontTargetPerson from "../sections/recruit/frontend/FrontTargetPerson";
import Policy from "../sections/recruit/common/Policy";
import RecruitJobOther from '../sections/recruit/common/JobOther';

export default function Fronend({data}){

    return (
        <React.Fragment>
            <FrontPageHeader data={data.PageHeader}/>
            <Breadcrumb data={data.PageHeader}/>
            <FrontTargetPerson data={data.TargetPerson} />
            <Policy data = {data.Policy}/>
            <RecruitJobOther data={data.JobOther}/>
        </React.Fragment>
    )
}