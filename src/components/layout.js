import React from "react";
import { Helmet } from "react-helmet";

import "./Layout.css";
import Footer from "./sections/Footer";
import MenuHeader from "./sections/MenuHeader";

export default function Layout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"></link>
      </Helmet>
      <MenuHeader />
        <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}
