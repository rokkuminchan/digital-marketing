import React from "react";
import TeamCharacteristic from "../components/sections/aboutUs/MemberCharacteristic"
import AboutUsData from "../data/AboutUs"

export default function AboutUs(props) {
  var {teamCharacteristic} = AboutUsData;
  return (
	<TeamCharacteristic data ={teamCharacteristic}/>
  );
}