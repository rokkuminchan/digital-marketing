import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import szksensei from '../../images/aboutus__szksensei.jpg';

let container;

const Data = {
  image: {
    src: szksensei,
    alt: "szksensei"
  },
  title: "CTO 鈴木高弘",
  description:
    "ITアーキテクトとして、様々な分野のプロジェクトを成功させた実績があります。オブジェクト指向の教育をする会社の立ち上げや教育コースの設計や技術者の育成も手掛けています。ワールドのITチームでは、これからIT業界で活躍するために必要なスキルを身に着ける為の教育プログラムを監修しています。ベトナムが大好きです。写真は、ベトナムの村のお寺に行った時のものです。"
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
  const image = container.querySelector("img");

  expect(image.src).toMatch(new RegExp(Data.image.src));
  expect(image.alt).toContain(Data.image.alt);
  expect(title.textContent).toBe(Data.title);
  expect(description.textContent).toBe(Data.description);
});
