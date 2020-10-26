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
        comment
        items {
          title
          descriptions
          icon {
            type
            name
          }
        }
      }
      WebApplication {
        title
        subDescription2
        subDescription1
        description
        link {
          title
          src
        }
        items {
          image {
            src {
              childImageSharp {
                fluid {
                  srcSet
                }
              }
            }
            alt
          }
          description
          cssCol
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
        title
        subDescription
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
          description
          subtitle
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
      }
    }
  }
`

