import React from "react";
import ReactDOM from "react-dom";
import WebApplication from "./WebApplication";

let container;

const Data = {
  title: "急速に進化を続けるWebアプリーケーション",
  description: "この次世代Webアプリを車に例えると、夢のような車になります",
  items: [
      {
        cssCol: "web-application__items--left",
        image: {
          src: "../../images/service__web-app-1.jpg",
          alt: "icon"
        },
        description: "10倍早く走る"
      },
    ],
  subDescription1: "PWA、JAM Stack、ヘッドレスCMOの登場により、全く姿を変えつつある現在のWebアプリケーション開発は、WORLDのITチームにお任せ下さい",
  subDescription2: "WORLDのITチームお勧めの最新テクノロジーは",
  link: {
      title: "こちら",
      src: "/technology"
    },
  image: {
      src: "../../images/service__web-application.jpg",
      alt: "image"
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

it("", () => {
  ReactDOM.render(<WebApplication data={Data}/>, container);

  const desc = container.querySelectorAll(" .web-application__items-description > p");

  expect(desc.length).toBe(Data.items.length);
  expect(desc[0].textContent).toBe(Data.items[0].description);
})


