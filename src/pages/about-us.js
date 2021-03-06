import React from "react";
import { graphql } from "gatsby";
import AboutUs from "../components/pages/AboutUs";
import Layout from "../components/layout";


export default function AboutUsPage({ data }) {
  return <Layout>
    <AboutUs data={data.ourTeamJson} />
  </Layout>
}

export const query = graphql`
  {
    ourTeamJson {
      title
      description
      pageHeader {
        description
        title
        subDescription
        image {
          alt
          src
        }
      }
      teamCharacteristic {
        title
        description
        items {
          description
          icon {
            alt
            name
            type
          }
        }
      }
      relationship {
        description
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
      mission {
        description
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
      memberIntroduction {
        description
        title
        items {
          description
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
      memberCharacteristic {
        description
        title
        items {
          css
          description
          title
        }
      }
      image {
        alt
        src
      }
      companyInformation {
        address
        fax
        phone
      }
      worldRecruitHistory {
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
      vision {
        title
        description
        items {
          description
          title
          css
        }
        image {
          alt
          src {
            publicURL
            childImageSharp {
              fluid {
                srcSet
              }
            }
          }
        }
      }
      vietnamUniversity {
        description
        title
        items {
          title
          link
          image {
            src {
              childImageSharp {
                fluid {
                  srcSet
                }
              }
            }
          }
          description {
            title
            subtitle
          }
        }
      }
    }
  }
`