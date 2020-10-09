import React from "react";
import Layout from "../layout";
import TechPageHeader from "../sections/technology/TechPageHeader";

export default function Technology({ data }) {
  return (
    <Layout>
      <TechPageHeader data={data.technologyJson.technologyHeader} />
    </Layout>
  );
}
