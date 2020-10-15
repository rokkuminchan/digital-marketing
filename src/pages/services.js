import React from "react";
import { graphql } from "gatsby";

import Services from "../components/pages/Services";

export default function ServicesPage({ data }) {
  return (
    <Services data={data.serviceJson}/>
  );
}

export const query = graphql`
  {
    serviceJson {
      WebApplicationRequirment {
        comment
        title
        items {
          title
          row {
            description
            icon {
              name
              type
            }
          }
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
      }
      WebApplication {
        description
        subDescription1
        subDescription2
        title
        link {
          src
          title
        }
        items {
          description
          icon {
            name
            type
          }
        }
        image {
          alt
          src
        }
      }
      ServiceHeader {
        title
        subDescription
        description
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
      }
      AgileTeamComposition {
        title
        description
        items {
          title
          description
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
        }
      }
    }
  }
`


