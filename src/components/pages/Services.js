import React from "react";
import Layout from "../layout";
import ServicePageHeader from "../../components/sections/service/ServicePageHeader";
import WebApplication from "../../components/sections/service/WebApplication";
export default function Services({ data }) {
  console.log(data.servicesJson);
  return (
    <Layout>
      <ServicePageHeader data={data.servicesJson.ServiceHeader} />
      <WebApplication data={data.servicesJson.WebApplication} />
    </Layout>
  );
}
