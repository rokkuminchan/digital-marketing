import React from "react";
import ReactDOM from "react-dom";
import RecruitHomeReason from "./RecruitHomeReason";

let container;
const Data = {
    title: "入社のメリット",
    items: [
      {
        image: {
          src: "../../images/recruit_home__reason-opportunity.jpg",
          alt: "Opportunity"
        },
        title: "スキルアップ",
        description: "スキルを向上させ、キャリアアップを支援する環境が整っている。"
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

it("can render RecruitHomeReason from data", () => {
    ReactDOM.render(<RecruitHomeReason data={Data}/>,container)

    const title = container.querySelector(" .recruit-home-reason > h3 ");
    const sub_title = container.querySelectorAll(" .recruit-home-reason__card-content > div ");
    const sub_description = container.querySelectorAll(" .recruit-home-reason__card-content > p ");

    expect(title.textContent).toBe(Data.title);
    expect(sub_title.length).toBe(Data.items.length);
    expect(sub_title[0].textContent).toBe(Data.items[0].title);
    expect(sub_description.length).toBe(Data.items.length);
    expect(sub_description[0].textContent).toBe(Data.items[0].description);
})