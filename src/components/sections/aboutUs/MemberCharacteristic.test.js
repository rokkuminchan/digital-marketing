import React from "react";
import ReactDOM from "react-dom";
import MemberCharacteristic from "./MemberCharacteristic.js";

let container;

const Data = {
  title: "ITチームメンバーの特徴",
  description: "私たちは第二世代のベトナム人ITエンジニアのチームです。",
  items: [
    {
      title: "日本が好きで",
      description:
        "技術が好きなメンバーです。日本人の仕事の仕方や新しい技術を積極的に学習しています。また、お互いを助け合うベトナム人の国民性もあり、チームワークが得意です。",
    },
    {
      title: "日本が好き",
      description:
        "全員が日本在住。日本に興味を持って一生懸命に日本語を学び、日本で暮らし日本人と働いて、日本の良さを体験している技術者です。言葉や文化、そして業務の理解力で違いが出ます。",
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
  ReactDOM.render(<MemberCharacteristic data={Data} />, container);
  const itemsTitle = container.querySelectorAll(
    ".member-characteristic__items-title > p"
  );
  const itemsDescription = container.querySelectorAll(
    ".member-characteristic__items > div > p"
  );

  for (let item = 0; item < Data.items.length; item++) {
    expect(itemsTitle[item].textContent).toBe(Data.items[item].title);
    expect(itemsDescription[item].textContent).toBe(
      Data.items[item].description
    );
  }
});
