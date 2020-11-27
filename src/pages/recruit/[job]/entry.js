import React from "react";
import { graphql } from "gatsby";

import RecruitEntry from "../../../components/pages/Entry";
import Layout from "../../../components/layout";

//Recruit diretor page
const EntryPage = ({ data }) => (
  <Layout>
    <RecruitEntry data={data.recruitEntryJson} />
  </Layout>
);

export default EntryPage;

export const query = graphql`
  {
    recruitEntryJson {
      EntryForm {
        action
        submit
        title
        items {
          choices
          is_required
          label
          name
          option
          placeholder
          type
        }
      }
    }
  }
`;
