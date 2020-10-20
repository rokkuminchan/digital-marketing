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
          descriptions
          title
          icon {
            name
            type
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
          cssCol
          cssColor
          description
          number
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
      ServiceHeader {
        description
        subDescription
        title
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
        items {
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
          subtitle
          title
        }
        description
        title
      }
    }
  }
`
