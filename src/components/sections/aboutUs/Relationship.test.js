import React from "react";
import ReactDOM from "react-dom";
import Relationship from "./Relationship";

let container;

const Data = {
  title: "about-us__relationship__title",
  description: "about-us__relationship__desc",
  image: {
         src: "../../images/aboutus__vnjp.jpg",
         alt: "about-us-vietnam-and-japan"
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


  const description = container.querySelector("p");

  expect(description.textContent).toBe(Data.description);
});
