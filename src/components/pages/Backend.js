import React from "react";
import Breadcrumb from "../sections/recruit/common/Breadcrumb"
import BackendPageHeader from "../sections/recruit/backend/BackendPageHeader"
import Policy from "../sections/recruit/common/Policy";

export default function Backend({data}){
    return (
    <React.Fragment>
     <BackendPageHeader data={data.Header} />
     <Breadcrumb data={data.Header}/>
      <Policy data = {data.Policy}/>
    </React.Fragment>
    );
}