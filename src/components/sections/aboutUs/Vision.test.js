import React from "react";
import ReactDOM from "react-dom";
import Vision from "./Vision";

let container;

const Data = {
  title: "ビジョン",
  description:
    "外国人IT技術者の「３つの壁」を乗り超え、、最先端のIT技術を駆使して日本をサポートする。",
  image: {
      src: "../../images/aboutus__vision.jpeg",
      alt: "vision"
   },
  items: [
    {
      title: "言葉の壁",
      description: "普通の日本人と同じように、日本語の読み書きや会話ができる",
    },
    {
      title: "文化の壁",
      description: "日本の文化を理解し、尊重する。、保存する。",
    },
    {
      title: "業務の壁",
      description: "日本人の働き方を学び、仕事に役立つシステムを設計する。",
    },
  ],
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
  ReactDOM.render(<Vision data={Data} />, container);
  const title = container.querySelector(".vision__title > p");
  const description = container.querySelector(".vision__description > p");
  const sub_title = container.querySelectorAll(".vision__items--inline > div > p");
  const sub_description = container.querySelectorAll(".vision__items--inline > p");
  // const img = container.querySelector("img");

  // expect(img.src).toMatch(new RegExp(Data.image.src));
  // expect(img.alt).toContain(Data.image.alt);
  expect(title.textContent).toBe(Data.title);
  expect(description.textContent).toBe(Data.description);
  expect(sub_title.length).toBe(Data.items.length);
  expect(sub_title[0].textContent).toBe(Data.items[0].title);
  expect(sub_title[1].textContent).toBe(Data.items[1].title);
  expect(sub_description.length).toBe(Data.items.length);
  expect(sub_description[0].textContent).toBe(Data.items[0].description);
});
