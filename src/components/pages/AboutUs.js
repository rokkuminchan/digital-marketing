import React from "react";
import Layout from "../layout";
import PageHeader from "../sections/aboutUs/PageHeader";
import Mission from "../sections/aboutUs/Mission";
import Vision from "../sections/aboutUs/Vision";
import MemberCharacteristic from "../sections/aboutUs/MemberCharacteristic";
import TeamCharacteristic from "../sections/aboutUs/TeamCharacteristic";
import MemberIntro from "../sections/aboutUs/MemberIntro";
import WorldRecruitHistory from "../sections/aboutUs/WorldRecruitHistory";
import Relationship from "../sections/aboutUs/Relationship";
import VNUniversity from "../sections/aboutUs/VNUniversity";

export default function AboutUs({ data }) {
  return (
    <Layout>
      <PageHeader />
      <Mission data={data.ourTeamJson.mission} />
      <Vision data={data.ourTeamJson.vision} />
      <TeamCharacteristic data={data.ourTeamJson.teamCharacteristic} />
      <MemberCharacteristic data={data.ourTeamJson.memberCharacteristic} />
      <MemberIntro data={data.ourTeamJson.memberIntroduction} />
      <WorldRecruitHistory data={data.ourTeamJson.worldRecruitHistory} />
      <Relationship data={data.ourTeamJson.relationship} />
      <VNUniversity data={data.ourTeamJson.vietnamUniversity} />
    </Layout>
  );
}
