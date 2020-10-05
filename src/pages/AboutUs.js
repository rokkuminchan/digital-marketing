import React from "react";
import Layout from "../components/layout";
import MemberCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
import AboutUsData from "../data/AboutUs";
import Vision from "../components/sections/aboutUs/Vision"
export default function AboutUs({ data }) {
  var { memberCharacteristic, vision } = AboutUsData;
  return (
    <Layout>
      <MemberCharacteristic data={memberCharacteristic} />
      <Vision data={vision}/>
    </Layout>
  );
}
