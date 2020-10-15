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
      WebApplicationForDigital {
        title
        image {
          alt
          src
        }
        description
      }
      WebApplication {
        backgroundSrc
        description
        title
        items {
          icon {
            type
            name
          }
          description
        }
      }
      Watashitachi {
        description
        subtitle
        title
        image {
          alt
          src
        }
      }
      Technology {
        description
        image {
          alt
          src
        }
        subtitle
        title
      }
      TeamCharacteristic {
        description
        image {
          alt
          src
        }
        title
      }
      MemberCharacteristic {
        description
        image {
          alt
          src
        }
        title
      }
      HomeHeader {
        description
        image {
          alt
          src
        }
        subtitle
        title
      }
      DetailedWork {
        descriptions
        image {
          alt
          src
        }
        title
      }
    }
  }
`



