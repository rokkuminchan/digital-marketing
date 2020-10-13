import React from "react";
import Layout from "../layout";
import ServicePageHeader from "../../components/sections/service/ServicePageHeader";
export default function Services({ data }) {
  console.log(data.servicesJson);
  return (
    <Layout>
      <ServicePageHeader data={data.servicesJson.ServiceHeader} />
    </Layout>
  );
}
