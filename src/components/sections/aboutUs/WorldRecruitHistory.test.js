import React from "react";
import ReactDOM from "react-dom";
import WorldRecruitHistory from "./WorldRecruitHistory.js";

let container;

const Data = {
  title: "about-us__worldRecruitHistory__title",
  description: "about-us__worldRecruitHistory__desc",
  image: {
         src: "../../images/aboutus__world-recruit-history.jpeg",
         alt: "WorldRecruitHistory"
      }
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
  // const title = container.querySelector("h3");
  const description = container.querySelector("p");
  // const image = container.querySelector("img");

  // expect(title.textContent).toBe(Data.title);
  expect(description.textContent).toBe(Data.description);
  // expect(image.src).toMatch(new RegExp(Data.image.src));
  // expect(image.alt).toContain(Data.image.alt);
});
