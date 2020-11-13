import React from "react";

import "./Layout.css";
import Footer from "./sections/Footer";
import MenuHeader from "./sections/MenuHeader";
import SEO from "./seo";

export default function Layout(props) {
  return (
    <React.Fragment>
      <SEO />
      <MenuHeader />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}
