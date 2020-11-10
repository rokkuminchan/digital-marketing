import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import Contact from "../components/pages/Contact";

export default function ServicesPage({ data }) {
  return (
    <Layout>
      <Contact data={data.contactJson} />
    </Layout>
  );
}

export const query = graphql`
  {
    contactJson {
      contact {
        action
        description
        title
        items {
          name
          placeholder
          type
        }
      }
    }
  }
`
