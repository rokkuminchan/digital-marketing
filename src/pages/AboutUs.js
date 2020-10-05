import React from "react";
import Layout from "../components/layout";
import MemberCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
import WorldRecruitHistory from "../components/sections/aboutUs/WorldRecruitHistory";
import TeamCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
import Relationship from "../components/sections/aboutUs/Relationship";
import AboutUsData from "../data/AboutUs";

export default function AboutUs({ data }) {
  var { memberCharacteristic, relationship } = AboutUsData;
  var { worldRecruitHistory } = AboutUsData;
  return (
    <Layout>
      <MemberCharacteristic data={memberCharacteristic} />
      <WorldRecruitHistory data={worldRecruitHistory} />
      <Relationship data={relationship} />
    </Layout>
  );
}
