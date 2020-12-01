import React from "react";
import ReactDOM from "react-dom";
import Mission from "./Mission";

let container;

const Data = {
  title: "about-us-mission__title",
  description: "about-us-mission__description",
  image: {
         src: "../../images/aboutus__mission.png",
         alt: "mission"
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

  const title = container.querySelector("h3");
  const description = container.querySelector("p");
  // const img = container.querySelector("img");

  // expect(img.src).toMatch(new RegExp(Data.image.src));
  // expect(img.alt).toContain(Data.image.alt);
  expect(title.textContent).toBe(Data.title);
  expect(description.textContent).toBe(Data.description);
});
