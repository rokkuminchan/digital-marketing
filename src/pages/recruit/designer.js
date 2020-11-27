import React from "react";
import { graphql } from "gatsby";

import RecruitDesigner from "../../components/pages/Designer";
import Layout from "../../components/layout";

//Recruit diretor page
const DesignerPage = ({ data }) => (
  <Layout>
    <RecruitDesigner data={data.recruitDesignerJson} />
  </Layout>
);

export default DesignerPage;

export const query = graphql`
  {
    recruitDesignerJson {
      designer {
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
          title
          content {
            link {
              name
              src
            }
          }
        }
        Pageheader {
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
      }
    }
  }
`;
