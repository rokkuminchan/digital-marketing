import React from "react";
import ReactDOM from "react-dom";
import TeamChracteristic from "./TeamCharacteristic"
import test from "../../../img/test.png"


let container;

const Data =  {
    title: "ITチームの特徴",
    description: "アジリティーが高く、要件定義から運用・サポートまで、また、小規模な開発から大規模開発まで、ご予算と納期に合わせたチームとご提案します。生産性と品質に自信があります。",
    image: {
        src: test,
        alt: "test",
    },
    items: [
        {
            img:{src:"../../../img/box.svg",alt:"icon1"},
            description: "アジリティが高い 高い実装能力を持ち、変更にも強い。",
        },
    ]
}

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render a component from data", () => {
  ReactDOM.render(<TeamChracteristic data={Data} />, container);
  const title = container.querySelector("h3");
  const description = container.querySelector("p");
  const img = container.querySelector("img");

  expect(img.src).toBe(Data.image.src);
  expect(img.alt).toContain(Data.image.alt);
  expect(title.textContent).toBe(Data.title);
  expect(description.textContent).toBe(Data.description);
});