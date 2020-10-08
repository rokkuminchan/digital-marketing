import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Card from "./Card";
import test from "../../img";

let container;

const Data = {
  img: {
    src: szksensei,
    alt: "szksensei",
  },
  title: "CTO 鈴木高弘",
  description:
    "これからの日本のIT業界に必要なスキルを身に着ける為の教育プログラムを監修しています。",
};

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render a view component from data", () => {
  act(() => {
    ReactDOM.render(<Card data={Data} />, container);
  });
  const title = container.querySelector("h1");
  const description = container.querySelector("p");
  const logo = container.querySelector("img");

  expect(logo.src).toMatch(new RegExp(Data.img.src));
  expect(logo.alt).toContain(logo.alt);
  expect(title.textContent).toBe(Data.title);
  expect(description.textContent).toBe(Data.description);
});
