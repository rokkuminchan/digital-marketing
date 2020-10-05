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
export default function AboutUs({ data }) {
  var { memberCharacteristic, vision, mission } = AboutUsData;
  var {worldRecruitHistory, memberIntroduction, relationship} = AboutUsData;
  var {teamCharacteristic} = AboutUsData;
  return (
    <Layout>
      <Mission data={mission} />
      <Vision data={vision} />
      <MemberCharacteristic data={memberCharacteristic} />
      <TeamCharacteristic data={teamCharacteristic} />
      <MemberIntro data={memberIntroduction} />
      <WorldRecruitHistory data={worldRecruitHistory} />
      <Relationship data={relationship} />
    </Layout>
  );
}
