import React from "react";
import Layout from "../components/layout";
import Mission from "../components/sections/aboutUs/Mission";
import MemberCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
import WorldRecruitHistory from "../components/sections/aboutUs/WorldRecruitHistory";
import TeamCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
import Relationship from "../components/sections/aboutUs/Relationship";
import AboutUsData from "../data/AboutUs";
import Vision from "../components/sections/aboutUs/Vision";
import MemberIntro from '../components/sections/aboutUs/MemberIntro';
export default function AboutUs({data}) {
  return (
    <Layout>
      <Mission data={AboutUsData.mission} />
      <Vision data={AboutUsData.vision} />
      <MemberCharacteristic data={AboutUsData.memberCharacteristic} />
      <TeamCharacteristic data={AboutUsData.teamCharacteristic} />
      <MemberIntro data={AboutUsData.memberIntroduction} />
      <WorldRecruitHistory data={AboutUsData.worldRecruitHistory} />
      <Relationship data={AboutUsData.relationship} />
    </Layout>
  );
}
