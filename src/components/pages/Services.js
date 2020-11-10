import React from "react";
import ServicePageHeader from "../../components/sections/service/ServicePageHeader";
import WebApplication from "../../components/sections/service/WebApplication";
import WebAppRequirment from "../../components/sections/service/WebAppRequirement";
import AgileTeamComposition from "../../components/sections/service/AgileTeamComposition";
export default function Services({ data }) {

  return (
    <React.Fragment>
      <ServicePageHeader data={data.ServiceHeader} />
      <WebApplication data={data.WebApplication} />
      <WebAppRequirment data={data.WebApplicationRequirment} />
      <AgileTeamComposition data={data.AgileTeamComposition} />
    </React.Fragment>
  );
}
