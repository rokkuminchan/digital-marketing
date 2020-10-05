import React from "react";
import Layout from "../components/layout";
import Mission from "../components/sections/aboutUs/Mission"
import MemberCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
import WorldRecruitHistory from "../components/sections/aboutUs/WorldRecruitHistory";
import TeamCharacteristic from "../components/sections/aboutUs/MemberCharacteristic";
import Relationship from "../components/sections/aboutUs/Relationship";
import AboutUsData from "../data/AboutUs";
import Vision from "../components/sections/aboutUs/Vision"
export default function AboutUs({ data }) {
<<<<<<< HEAD
  var { memberCharacteristic, vision } = AboutUsData;
=======
  var { mission, memberCharacteristic, relationship } = AboutUsData;
  var { worldRecruitHistory } = AboutUsData;
>>>>>>> f4cfc320d6241b5d4041fd9b75a11676f2de836e
  return (
    <Layout>
      <Mission data={mission} />
      <MemberCharacteristic data={memberCharacteristic} />
<<<<<<< HEAD
      <Vision data={vision}/>
=======
      <WorldRecruitHistory data={worldRecruitHistory} />
      <Relationship data={relationship} />
>>>>>>> f4cfc320d6241b5d4041fd9b75a11676f2de836e
    </Layout>
  );
}
