import React from "react";
import TechPageHeader from "../sections/technology/TechPageHeader";
import TechnologyList from "../sections/technology/TechnologyList";

export default function Technology({ data }) {
  return (
    <React.Fragment>
      <TechPageHeader data={data.technologyHeader} />
      <TechnologyList data={data.technologyList} />
    </React.Fragment>
  );
}
