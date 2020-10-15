import React from "react";
import Layout from "../layout";
import DetailedWork from '../sections/home/DetailedWork'
import TeamCharacteristic from '../sections/home/TeamCharacteristic'
import Technology from '../sections/home/Technology'

export default function Home({data}) {
  return (
    <Layout>
      <DetailedWork data={data.DetailedWork} />
      <TeamCharacteristic data={data.TeamCharacteristic} />
      <Technology data={data.Technology} />
    </Layout>
  )
}
