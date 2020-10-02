import React from "react";
import "./Layout.css";
import Footer from "./sections/Footer";
import PageHeader from "./sections/PageHeader";

export default function Layout(props) {
  return (
    <React.Fragment>
      <PageHeader />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}
