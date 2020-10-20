import React from "react";
import ReactDOM from "react-dom";
import WebApplication from "./WebApplication";
//import service_designer from "../../../images/Service/service_designer.jpg";

let container;

const Data = {
  title: "急速に進化を続けるWebアプリーケーション",
  description: "この次世代Webアプリを車に例えると、夢のような車になります。",
  items: [
    {
      icon: {
        name: "FiCircle",
        type: "FiCircle",
      },
      description: "10倍早く走る",
    },
    {
      icon: {
        name: "FiSquare",
        type: "FiSquare",
      },
      description: "燃費が10倍良い",
    },
  ],
  subDescription1:
    "PWA、JAM Stack、ヘッドレスCMOの登場により、全く姿を変えつつある現在のWebアプリケーション開発は、WorldのITチームにお任せ下さい。",
  subDescription2: "WorldのITチームお勧めの最新テクノロジーは",
  link: {
    title: "こちら",
    src: "../technology",
  },
  image: {
    src: "../../images/service__web-application.png",
    alt: "Image",
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

it("can render a title from data", () => {
  ReactDOM.render(<WebApplication data={Data} />, container);

  const title = container.querySelector("h3");
  const description = container.querySelector("p");
  const img = container.querySelector("img");
  const subDes1 = container.querySelector(
    ".web-application__sub-description > p"
  );
  const subDes2 = container.querySelector(
    ".web-application__sub-description > span"
  );
  const link = container.querySelector(
    ".web-application__sub-description > span > a"
  );

  expect(title.textContent).toBe(Data.title);
  expect(description.textContent).toBe(Data.description);
  expect(subDes1.textContent).toBe(Data.subDescription1);
  expect(subDes2.textContent).toBe(Data.subDescription2);
  expect(link.getAttribute("href")).toBe(Data.link.src);
  expect(link.textContent).toContain(Data.link.title);
  
  expect(Data.image.src).toContain(img.getAttribute("src"));
  expect(Data.image.alt).toBe(img.alt);
  //
});
