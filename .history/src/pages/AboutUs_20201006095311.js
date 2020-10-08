import React from "react";
import Layout from "../components/layout";
import Vision from "../components/sections/aboutUs/Vision";
import Mission from "../components/sections/aboutUs/Mission";
import MemberCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
import WorldRecruitHistory from "../components/sections/aboutUs/WorldRecruitHistory";
import TeamCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
import Relationship from "../components/sections/aboutUs/Relationship";
import AboutUsData from "../data/AboutUs";

export default function AboutUs({ data }) {
  var { memberCharacteristic, vision } = AboutUsData;
  return (
    <Layout>
      <Vision data={vision} />
      <MemberCharacteristic data={memberCharacteristic} />
      <Relationship data={relationship} />
    </Layout>
  );
}
