import React from "react";
import Layout from "../layout";
import Contact from "../sections/contact/Contact";
export default function contact({ data }) {
  return (
    <Layout>
      <Contact data={data.contact} />
    </Layout>
  );
}
