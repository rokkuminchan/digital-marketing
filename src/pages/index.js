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
          number
          description
          cssColor
          cssCol
        }
        icon {
          type
          name
        }
        description
        backgroundSrc {
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
        title
        subtitle
        descriptions
        images {
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
      Technology {
        description
        title
        subtitle
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
        title
        subDescription
        image {
          alt
          src
        }
        description
      }
      DetailedWork {
        title
        image {
          alt
          src {
            id
          }
        }
        descriptions1
        descriptions2
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