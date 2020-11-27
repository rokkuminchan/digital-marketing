import React from "react";
import { graphql } from "gatsby";

import RecruitBackEnd from "../../components/pages/Backend";
import Layout from "../../components/layout";

//Recruit diretor page
const BackEndPage = ({ data }) => (
  <Layout>
    <RecruitBackEnd data={data.recruitBackendJson} />
  </Layout>
);

export default BackEndPage;

export const query = graphql`
  {
    recruitBackendJson {
      Header {
        title
        description
        image {
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
          items {
            descriptions
            subtitle
          }
          title
        }
        Policy {
          detail {
            description
            icon {
              alt
              type
            }
            title
          }
          title
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
