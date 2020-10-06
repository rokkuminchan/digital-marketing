import React from "react";
import ReactDOM from "react-dom";
import DescriptiveIcon from "./DescriptiveIcon";

let container;

const Data = {
  icon: {
    src: "",
    alt: "",
  },
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

it("can render a DescriptiveIcon from data", () => {
  ReactDOM.render(<DescriptiveIcon data={Data} />, container);

  const description = container.querySelector("p");

  expect(description.textContent).toBe(Data.description);
});
