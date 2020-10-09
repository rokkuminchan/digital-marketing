import React from "react";
import Layout from "../layout";
import TechPageHeader from "../sections/technology/TechPageHeader";
import TechnologyList from "../sections/technology/TechnologyList";

export default function Technology({ data }) {
  return (
    <Layout>
      <TechPageHeader data={data.technologyJson.technologyHeader} />
      <TechnologyList data={data.technologyJson.technologyList} />
    </Layout>
  );
}
