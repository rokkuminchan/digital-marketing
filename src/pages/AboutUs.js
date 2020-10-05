import React from "react";
import Layout from "../components/layout";
import TeamCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
import AboutUsData from "../data/AboutUs";

export default function AboutUs({data}) {

  var { teamCharacteristic } = AboutUsData;
  return <Layout>
    <TeamCharacteristic data={teamCharacteristic} />
  </Layout>;
}
