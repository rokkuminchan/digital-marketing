import React from "react";
import { Helmet } from "react-helmet";

import "./Layout.css";
import Footer from "./sections/Footer";
import MenuHeader from "./sections/MenuHeader";

export default function Layout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta property="og:title" content=" ワールドのITチーム" />     
        <meta property="og:description" content="ワールドのITチームのご紹介サイト" />     
        <meta property="og:site_name" content="WORLD IT TEAM" />     
        <meta property="og:image" content=" https://lh3.googleusercontent.com/proxy/Rhy7Lon3zF3xRVs2rKaazuE4Nn0ckT41xYIxsmDlmMRWV47-034U5bCLkNCxa__uSefPcfnlPer07lcxe0Lm2uKpolsGHem-JWoWw-HlOA1Zrd2GfQw52yqHHVy_" />
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"></link>
        <title>ワールドのITチーム</title>
      </Helmet>
      <MenuHeader />
        <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}
