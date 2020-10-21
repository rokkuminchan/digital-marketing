import React from "react";
import ReactDOM from "react-dom";
import WebApplication from "./WebApplication";
// import designer from "../../../images/Service/designer.jpg";

let container;

const Data = {
  title: "急速に進化を続けるWebアプリーケーション",
  description: "この次世代Webアプリを車に例えると、夢のような車になります。",
  items: [
    {
      cssCol: "web-application__items--left",
      cssColor: "#FF8A90",
      number: "01",
      description: "10倍早く走る"
    },
    {
      cssCol: "web-application__items--right",
      cssColor: "#2476FCF8",
      number: "02",
      description: "燃費が10倍良い"
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
    src: "../../../images/service__designer.jpg",
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
  const title_link = container.querySelector(
    ".web-application__sub-description > span > a > p"
  );
  const number = container.querySelectorAll(
    ".web-application__items-number > div"
  );
  const desc_item = container.querySelectorAll(
    ".web-application__items-description > p"
  );

  expect(title.textContent).toBe(Data.title);
  expect(description.textContent).toBe(Data.description);
  expect(number.length).toBe(Data.items.length);
  expect(number[0].textContent).toBe(Data.items[0].number);
  expect(number[1].textContent).toBe(Data.items[1].number);

  expect(desc_item.length).toBe(Data.items.length);
  expect(desc_item[0].textContent).toBe(Data.items[0].description);
  expect(desc_item[1].textContent).toBe(Data.items[1].description);

  expect(subDes1.textContent).toBe(Data.subDescription1);
  expect(subDes2.textContent).toBe(Data.subDescription2);
  expect(link.getAttribute("href")).toBe(Data.link.src);
  expect(title_link.textContent).toBe(Data.link.title);
  expect(Data.image.src).toContain(img.getAttribute("src"));
  expect(Data.image.alt).toBe(img.alt);
  // expect(img.src).toMatch(new RegExp(Data.image.src));
  // expect(img.alt).toContain(Data.image.alt);
});
