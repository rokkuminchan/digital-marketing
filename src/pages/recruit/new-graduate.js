import React from "react";
import { graphql } from "gatsby";

import RecruiNewGraduate from "../../components/pages/Graduate";
import Layout from "../../components/layout";

//Recruit diretor page
const NewGraduatePage = ({ data }) => (
  <Layout>
    <RecruiNewGraduate data={data.recruitNewGraduateJson} />
  </Layout>
);

export default NewGraduatePage;

export const query = graphql`
  {
    recruitNewGraduateJson {
      JobDetails {
        JobDescription {
          descriptions
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
      graduateHeader {
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
        title
      }
    }
  }
`;
