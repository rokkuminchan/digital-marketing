import React from "react";
import Layout from "../components/Layout";
import TeamCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
import AboutUsData from "../data/AboutUs";

export default function AboutUs(props) {
  var { teamCharacteristic } = AboutUsData;
  // return <TeamCharacteristic data={teamCharacteristic} />;

  return <Layout></Layout>;
}
