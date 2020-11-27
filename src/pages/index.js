import React from "react";
import { graphql } from "gatsby";

import Home from "../components/pages/Home";
import Layout from "../components/layout";

//Home page
const IndexPage = ({ data }) => (
  <Layout>
    <Home data={data.homeJson} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  {
    homeJson {
      WebApplication {
        backgroundSrc {
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
        items {
          cssCol
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
        icon {
          name
          type
        }
      }
      WebAppForDigital {
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
      Watashitachi {
        descriptions
        subtitle
        title
        images {
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
      Technology {
        description
        subtitle
        title
        link {
          src
          title
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
      HomePageHeader {
        description
        subDescription
        title
        image {
          alt
          src
        }
      }
      DetailedWork {
        title
        link {
          src
          title
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
        descriptions2
        descriptions1
      }
      Recruit {
        title
        subtitle
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
      Contact {
        link {
          src
          title
        }
      }
      Characteristic {
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
  }
`

