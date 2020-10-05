import React from "react";
import ReactDOM from "react-dom";
import Title from "./Title";

let container;

const Data = "ミッション";

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render a title from data", () => {
  ReactDOM.render(<Title data={Data} />, container);
  const title = container.querySelector("h3");
  expect(title.textContent).toBe(Data);
});
