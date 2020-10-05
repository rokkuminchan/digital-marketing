import React from "react";
import Layout from "../components/layout";
import MemberCharacteristic from "../components/sections/about us/MemberCharacteristic";
import AboutUsData from "../data/AboutUs";

export default function AboutUs(props) {
  var { memberCharacteristic } = AboutUsData;
  return (
    <Layout>
      <MemberCharacteristic data={memberCharacteristic} />
    </Layout>
  );
}
