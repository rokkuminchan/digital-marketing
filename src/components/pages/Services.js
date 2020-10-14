import React from "react";
import Layout from "../layout";
import ServicePageHeader from "../../components/sections/service/ServicePageHeader";
import AgileTeamComposition from "../../components/sections/service/agileTeamComposition";
export default function Services({ data }) {
  console.log(data.servicesJson);
  return (
    <Layout>
      <ServicePageHeader data={data.servicesJson.ServiceHeader} />
      <AgileTeamComposition data={data.servicesJson.AgileTeamComposition}/>
    </Layout>
  );
}
