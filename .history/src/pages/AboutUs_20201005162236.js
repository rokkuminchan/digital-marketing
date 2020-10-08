import React from "react";
import Layout from "../components/layout";
import MemberCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
// import TeamCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
//import Relationship from "../components/sections/aboutUs/Relationship";
import AboutUsData from "../data/AboutUs";

export default function AboutUs({ data }) {
  var { memberCharacteristic, relationship } = AboutUsData;
  return (
    <Layout>
      <MemberCharacteristic data={memberCharacteristic} />
      {/* <Relationship data={relationship} /> */}
    </Layout>
  );
}
