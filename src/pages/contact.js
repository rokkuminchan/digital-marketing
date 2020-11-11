import React from "react";
import { graphql } from "gatsby";

import Contact from "../components/pages/Contact";

export default function ServicesPage({ data }) {
  return <Contact data={data.contactJson} />
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
