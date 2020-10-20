import React from "react";
import Layout from "../layout";
import Form from "../sections/contact/Form";
export default function Contact({ data }) {
  return (
    <Layout>
      <Form data={data.Contact} />
    </Layout>
  );
}
