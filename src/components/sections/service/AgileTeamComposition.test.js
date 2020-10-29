import React from "react";
import ReactDOM from "react-dom";
import AgileTeamComposition from "./AgileTeamComposition";

let container;

const Data = {
    title: "アジャイル・チームの構成",
    description: "それぞれが得意分野を持ち、全員がコーディング出来るIT技術者のチームです。チームの共通言語は、HTML、CSS、JavaScriptです。必要最小限のドキュメントで迅速に実際に動作するプロダクトを開発します",
    items: [
      {
        image: {
        src: "../../images/service__director.jpg",
        alt: "director"
        },
        title: "ディレクタ",
        subtitle: "Director",
        description: "コミュニケーション能力が高く、ディレクションが出来る人材です        "
      },
      {
        image: {
          src: "../../images/service__designer.jpg",
          alt: "designer"
        },
        title: "デザイナ",
        subtitle: "Designer",
        description: "レスポンシブなWebデザインを理解し、XDにより迅速に要求を目に見える形にします"
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

  it("can render AgileTeamComposition from data", () => {
      ReactDOM.render(<AgileTeamComposition data={Data}/>, container);

      const desc = container.querySelector(" .agileTeamComposition__description > p");
      const subtitle = container.querySelectorAll(" .items-content > p")

      expect(desc.textContent).toBe(Data.description);
      expect(subtitle.length).toBe(Data.items.length);
      expect(subtitle[0].textContent).toBe(Data.items[0].subtitle);
      expect(subtitle[1].textContent).toBe(Data.items[1].subtitle);
  })