import React from "react";
import ReactDOM from "react-dom";
import Mission from "./Mission";
import mission from "../../../images/AboutUs/mission.png";

let container;

const Data = {
  title: "ミッション",
  description: "高度IT人材で日本のDXに貢献する。",
  image: {
    src: mission,
    alt: "about-us-mission"
  }
};

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render a component from data", () => {
  ReactDOM.render(<Mission data={Data} />, container);

  // const title = container.querySelector("h3");
  const description = container.querySelector("p");
  const img = container.querySelector("img");

  expect(img.src).toMatch(new RegExp(Data.image.src));
  expect(img.alt).toContain(Data.image.alt);
  // expect(title.textContent).toBe(Data.title);
  expect(description.textContent).toBe(Data.description);
});
