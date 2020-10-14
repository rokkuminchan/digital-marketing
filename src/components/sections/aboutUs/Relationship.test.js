import React from "react";
import ReactDOM from "react-dom";
import Relationship from "./Relationship";
import vnjp from "../../../images/AboutUs/vnjp.jpg";

let container;

const Data = {
  title: "ベトナムと日本との関係",
  description:
    "2009年に日・ベトナム経済連携協定を締結、貿易の自由化、ベトナム人人材の受け入れ経済的結びつきを強める下地が出来ました。",

  image: {
    src: vnjp,
    alt: "relationship"
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

it("can render a title from data", () => {
  ReactDOM.render(<Relationship data={Data} />, container);

  // const title = container.querySelector("h3");
  const description = container.querySelector("p");
  const img = container.querySelector("img");

  // expect(title.textContent).toBe(Data.title);
  expect(description.textContent).toBe(Data.description);
  expect(img.src).toMatch(new RegExp(Data.image.src));
  expect(img.alt).toContain(Data.image.alt);
});
