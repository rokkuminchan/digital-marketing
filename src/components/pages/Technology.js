import React from "react";
import Layout from "../layout";
import PageHeader from "../sections/technology/PageHeader";

export default function Technology({ data }) {
  // Chạy xem trong console chrome xem dữ liệu nó ra như thế nào rồi truyền vào
  // Xong rồi xoá dòng này giúp anh nhé Tuấn
  console.log(data.technologyJson);

  return (
    <Layout>
      <PageHeader />
    </Layout>
  );
}
