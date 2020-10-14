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
      <Mission data={data.mission} />
      <Vision data={data.vision} />
      <TeamCharacteristic data={data.teamCharacteristic} />
      <MemberCharacteristic data={data.memberCharacteristic} />
      <MemberIntro data={data.memberIntroduction} />
      <WorldRecruitHistory data={data.worldRecruitHistory} />
      <Relationship data={data.relationship} />
      <VNUniversity data={data.vietnamUniversity} />
    </Layout>
  );
}
