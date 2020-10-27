import React from "react";
import ReactDOM from "react-dom";
import AgileTeamCompositionList from "./AgileTeamCompositionList";

let container;

const Data = {
    image: {
        src: "../../images/service__director.jpg",
        alt: "director"
        },
    title: "ディレクタ",
    subtitle: "Director",
    description: "コミュニケーション能力が高く、ディレクションが出来る人材です        "
}
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("can render AgileTeamComposition from data", () => {
      ReactDOM.render(<AgileTeamCompositionList data={Data}/>, container);

      const item_title = container.querySelector(" h1 ");
      const item_desc = container.querySelector(" p ")

      expect(item_title.textContent).toBe(Data.title);
      expect(item_desc.textContent).toBe(Data.description);
  })