import React from "react";

import "./Layout.css";
import Footer from "./sections/Footer";
import MenuHeader from "./sections/MenuHeader";
import EntryButton from "./sections/EntryButton";

export default function Layout(props) {
  return (
    <React.Fragment>
      <MenuHeader />
      <main>{props.children}</main>
      <Footer />
      <EntryButton path="/" />
    </React.Fragment>
  );
}