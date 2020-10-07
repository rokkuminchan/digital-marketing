import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/about-us/">私たちのチーム</Link> <br />
  </Layout>
);

export default IndexPage;
