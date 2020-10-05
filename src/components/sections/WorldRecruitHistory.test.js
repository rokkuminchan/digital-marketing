import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import test from "../../img/test.png";

let container;

const Data = {
  title: "test title",
  description: "test description",
  img: {
    src: "",
    alt: "",
  },
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
  ReactDOM.render(<Card data={Data} />, container);
  const title = container.querySelector("h3");
  const description = container.querySelector("p");
  const img = container.querySelector("img");

  expect(img.src).toMatch(new RegExp(Data.img.src));
  expect(img.alt).toContain(Data.img.alt);
  expect(title.textContent).toBe(Data.title);
  expect(description.textContent).toBe(Data.description);
});
