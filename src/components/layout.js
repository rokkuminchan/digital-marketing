import React from "react";

import "./Layout.css";
import { withTrans } from '../i18n/withTrans'
import Footer from "./sections/Footer";
import MenuHeader from "./sections/MenuHeader";

function Layout(props) {
  return (
    <React.Fragment>
      <MenuHeader />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default withTrans(Layout)