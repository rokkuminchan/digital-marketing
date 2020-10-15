import React from "react";
import Layout from "../layout";
import DetailedWork from '../sections/home/DetailedWork';
import TeamCharacteristic from '../sections/home/TeamCharacteristic';
import Technology from '../sections/home/Technology';
import WebApplication from '../sections/home/WebApplication';

export default function Home({data}) {
  return (
    <Layout>
      <WebApplication data={data.WebApplication} />
      <DetailedWork data={data.DetailedWork} />
      <TeamCharacteristic data={data.TeamCharacteristic} />
      <Technology data={data.Technology} />
    </Layout>
  )
}
