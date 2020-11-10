import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import Technology from "../components/pages/Technology";

export default function TechnologyPage({ data }) {
  return (
    <Layout>
      <Technology data={data.technologyJson} />
    </Layout>
  );
}

export const query = graphql`
  {
    technologyJson {
      technologyList {
        description
        title {
          small
          large
        }
        items {
          description {
            bold
            normal
          }
          image {
            alt
            src {
              childImageSharp {
                fluid {
                  srcSet
                }
              }
            }
          }
          link
          title
        }
      }
      technologyHeader {
        image {
          alt
          src {
            childImageSharp {
              fluid {
                srcSet
              }
            }
          }
        }
        description
        title
      }
    }
  }
`

