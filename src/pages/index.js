import React from "react";
import { graphql } from "gatsby";
import Home from "../components/pages/Home";

//Home page
const IndexPage = ({data}) => (
  <Home data={data.homeJson}/>
);

export default IndexPage;

export const query = graphql`
  {
    homeJson {
      WebApplication {
        title
        items {
          cssCol
          cssColor
          description
          number
        }
        icon {
          name
          type
        }
        description
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
      }
      WebAppForDigital {
        title
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
      }
      Watashitachi {
        title
        subtitle
        descriptions
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
          title
          src
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
        title
        subDescription
        image {
          alt
          src
        }
      }
      DetailedWork {
        descriptions1
        descriptions2
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
      Characteristic {
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
`