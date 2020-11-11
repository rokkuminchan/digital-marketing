import React from "react";
import { withTrans } from '../i18n/withTrans'

import "./Layout.css";
import Footer from "./sections/Footer";
import MenuHeader from "./sections/MenuHeader";
import SEO from "./seo";

function Layout(props) {
  return (
    <React.Fragment>
      <SEO />
      <MenuHeader />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default withTrans(Layout)
