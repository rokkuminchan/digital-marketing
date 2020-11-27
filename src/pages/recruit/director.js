import React from "react";
import { graphql } from "gatsby";

import RecruitDirector from "../../components/pages/Director";
import Layout from "../../components/layout";

//Recruit diretor page
const RecruitDirectorPage = ({ data }) => (
  <Layout>
    <RecruitDirector data={data.recruitDirectorJson} />
  </Layout>
);

export default RecruitDirectorPage;

export const query = graphql`
  {
    recruitDirectorJson {
      Header {
        description
        title
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
            title
            icon {
              alt
              type
            }
          }
        }
        TargetPerson {
          descriptions
          title
        }
      }
      JobOther {
        title
        content {
          link {
            name
            src
          }
        }
      }
    }
  }
`;
