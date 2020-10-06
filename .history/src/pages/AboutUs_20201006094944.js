import React from "react";
import Layout from "../components/layout";
import Mission from "../components/sections/aboutUs/Mission";
import MemberCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
import WorldRecruitHistory from "../components/sections/aboutUs/WorldRecruitHistory";
import TeamCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
import Relationship from "../components/sections/aboutUs/Relationship";
import AboutUsData from "../data/AboutUs";
import Vision from "../components/sections/aboutUs/Vision";
export default function AboutUs({ data }) {
  var { memberCharacteristic, vision } = AboutUsData;
  return (
    <Layout>
      <Vision data={vision} />
      <MemberCharacteristic data={memberCharacteristic} />
    </Layout>
  );
}
