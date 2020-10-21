import React from "react";
import Layout from "../layout";
import DetailedWork from "../sections/home/DetailedWork";
import TeamCharacteristic from "../sections/home/TeamCharacteristic";
import Technology from "../sections/home/Technology";
import WebApplication from "../sections/home/WebApplication";
import WebAppForDigital from "../sections/home/WebAppForDigital"
import HomePageHeader from "../sections/home/homePageHeader";
export default function Home({ data }) {
  return (
    <Layout>
      <HomePageHeader data={data.HomePageHeader}/>
      <WebApplication data={data.WebApplication} />
      <WebAppForDigital data={data.WebAppForDigital}/>
      <DetailedWork data={data.DetailedWork} />
      <TeamCharacteristic data={data.TeamCharacteristic} />
      <Technology data={data.Technology} />
    </Layout>
  );
}
