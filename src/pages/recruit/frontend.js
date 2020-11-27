import React from "react";
import { graphql } from "gatsby";

import RecruitFrontEnd from "../../components/pages/Frontend";
import Layout from "../../components/layout";

//Recruit diretor page
const FrontEndPage = ({ data }) => (
  <Layout>
    <RecruitFrontEnd data={data.recruitFrontendJson} />
  </Layout>
);

export default FrontEndPage;

export const query = graphql`
  {
    recruitFrontendJson {
      FrontEndHeader {
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
      JobDetails {
        JobDescription {
          descriptions
          title
        }
        JobRequirement {
          title
          items {
            descriptions
            subtitle
          }
        }
        Policy {
          title
          detail {
            description
            icon {
              alt
              type
            }
            title
          }
        }
        TargetPerson {
          descriptions
          title
        }
      }
      JobOther {
        content {
          link {
            name
            src
          }
        }
        title
      }
    }
  }
`;
