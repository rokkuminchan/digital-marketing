import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

let container;

const Data = {
  title: "about-us-member-introduction__items-title-16",
  image: {
      src: "../../images/aboutus__thai.jpg",
      alt: "thai"
            },
      description: "about-us-member-introduction__items-description-16"
    };

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render a Card from data", () => {
  ReactDOM.render(<Card data={Data} />, container);
  const title = container.querySelector("h3");
  const description = container.querySelector("p");
  // const img = container.querySelector("img");

  // expect(img.src).toMatch(new RegExp(Data.image.src));
  // expect(img.alt).toContain(Data.image.alt);
  expect(title.textContent).toBe(Data.title);
  expect(description.textContent).toBe(Data.description);
});
