import React from "react";
import { useStaticQuery, graphql } from "gatsby"

import "./Layout.css";
import Footer from "./sections/Footer";
import MenuHeader from "./sections/MenuHeader";
import SEO from "./seo";

export default function Layout(props) {
  const data = useStaticQuery(graphql`
    {
      metadataJson {
        image {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <SEO image={data.metadataJson.image.childImageSharp.fixed.src}/>
      <MenuHeader />
        <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}
