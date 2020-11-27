import React from "react";
import DetailedWork from "../sections/home/DetailedWork";
import Characteristic from "../sections/home/Characteristic";
import Technology from "../sections/home/Technology";
import WebApplication from "../sections/home/WebApplication";
import WebAppForDigital from "../sections/home/WebAppForDigital";
import AboutUs from "../sections/home/AboutUs";
import HomePageHeader from "../sections/home/homePageHeader";
import Contact from "../sections/home/Contact";
import Recruit from "../sections/home/Recruit";

export default function Home({ data }) {
  return (
    <React.Fragment>
      <HomePageHeader data={data.HomePageHeader} />
      <WebApplication data={data.WebApplication} />
      <WebAppForDigital data={data.WebAppForDigital} />
      <DetailedWork data={data.DetailedWork} />
      <Characteristic data={data.Characteristic} />
      <AboutUs data={data.Watashitachi} />
      <Technology data={data.Technology} />
      <Recruit data={data.Recruit} />
      <Contact data={data.Contact} />
    </React.Fragment>
  );
}
