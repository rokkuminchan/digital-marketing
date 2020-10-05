import React from "react";
import Layout from "../components/layout";
import MemberCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
<<<<<<< HEAD
import WorldRecruitHistory from "../components/sections/aboutUs/WorldRecruitHistory";
import TeamCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
=======
//import TeamCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
>>>>>>> 730c3dca57ef5b0ddf5f6f40eca76b2831a9902e
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
