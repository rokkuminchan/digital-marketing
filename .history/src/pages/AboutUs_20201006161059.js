import React from "react";
import Layout from "../components/layout";
import Mission from "../components/sections/aboutUs/Mission";
import Vision from "../components/sections/aboutUs/Vision";
import MemberCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
import TeamCharacteristic from "../components/sections/aboutUs/TeamCharacteristic";
import MemberIntro from "../components/sections/aboutUs/MemberIntro";
import WorldRecruitHistory from "../components/sections/aboutUs/WorldRecruitHistory";
import Relationship from "../components/sections/aboutUs/Relationship";
import VNUniversity from "../components/sections/aboutUs/VNUniversity";

export default function AboutUs({ data }) {
  return (
    <Layout>
      {/* <Mission data={data.ourTeamJson.mission} /> */}
      <Vision data={data.ourTeamJson.vision} />
      <MemberCharacteristic data={data.ourTeamJson.memberCharacteristic} />
      <TeamCharacteristic data={data.ourTeamJson.teamCharacteristic} />
      <MemberIntro data={data.ourTeamJson.memberIntroduction} />
      <WorldRecruitHistory data={data.ourTeamJson.worldRecruitHistory} />
      <Relationship data={data.ourTeamJson.relationship} />
      <VNUniversity data={data.ourTeamJson.vietnamUniversity} />
    </Layout>
  );
}
