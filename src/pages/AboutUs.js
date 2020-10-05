import React from "react";
import Layout from "../components/layout";
import MemberCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
import AboutUsData from "../data/AboutUs";

export default function AboutUs({ data }) {
  var { memberCharacteristic } = AboutUsData;
  return (
    <Layout>
      <MemberCharacteristic data={memberCharacteristic} />
    </Layout>
  );
}
