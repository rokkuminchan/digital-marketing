import React from "react";
import { graphql } from "gatsby";

import RecruitHome from "../components/pages/RecruitHome";
import Layout from "../components/layout";

//Home page
const RecruitHomePage = ({ data }) => (
  <Layout>
    <RecruitHome data={data.recruitHomeJson} />
  </Layout>
);

export default RecruitHomePage;

export const query = graphql`
  {
    recruitHomeJson {
      RecruitHomeHeader {
        description
        title
      }
      RecruitHomeReason {
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
        title
      }
      RecruitHomeRecruitmentJobs {
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
        button {
          link
          title
        }
      }
      RecruitHomeTargetingPersons {
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
        title
        items {
          description
          title
        }
      }
    }
  }
`;
