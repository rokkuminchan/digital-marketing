import React from "react";
import ReactDOM from "react-dom";
import WorldRecruitHistory from "./WorldRecruitHistory.js";
import wrh from "../../../img/AboutUs/world-recruit-history.jpeg";

let container;

const Data = {
  title: "ベトナム人技術者の採用",
  description:
    "ベトナムは若者の人国が多く、国としてもIT技術に力を入れていますので、IT業界での慢性的な人材不足を解決する国として注目されています。ワールドでも、ベトナムに注目して、2018年からIT人材の採用をしてきています。",
  image: {
    src: wrh,
    alt: "WorldRecruitHistory",
  },
};

beforeEach(() => {
  container = document.createElement("section");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render a component from data", () => {
  ReactDOM.render(<WorldRecruitHistory data={Data} />, container);
  const title = container.querySelector("h3");
  const description = container.querySelector("p");
  const image = container.querySelector("img");

  expect(title.textContent).toBe(Data.title);
  expect(description.textContent).toBe(Data.description);
  expect(image.src).toMatch(new RegExp(Data.image.src));
  expect(image.alt).toContain(Data.image.alt);
});
