import React from "react";
import ReactDOM from "react-dom";
import MemberIntro from "./MemberIntro.js";
import szksensei from '../../../images/aboutus__szksensei.jpg';
import huy from '../../../images/aboutus__huy.jpg';

let container;

const Data = {
  title: "メンバー紹介",
  description:
    "我々は優秀なベトナム人エンジン中心としたチームです。レベルの高いべトナム大学の情報処理学科を卒業し、実務経験も豊富にあります。",
  items: [
    {
      title: "CTO 鈴木高弘",
      image: {
        src: szksensei,
        alt: "szksensei"
      },
      description:
        "ITアーキテクトとして、様々な分野のプロジェクトを成功させた実績があります。オブジェクト指向の教育をする会社の立ち上げや教育コースの設計や技術者の育成も手掛けています。ワールドのITチームでは、これからIT業界で活躍するために必要なスキルを身に着ける為の教育プログラムを監修しています。ベトナムが大好きです。写真は、ベトナムの村のお寺に行った時のものです。"
    },
    {
      title: "ヴー・ドゥック・フィー",
      image: {
        src: huy,
        alt: "huy"
      },
      description:
        "ベトナムであるハノイ工科大学で情報技術を卒業した後、日本に就職することにしました。私はインターネットというツールの魅力を最大限に活かし、クライアントのビジネスを成功へと導くサイトをつくりあげるプロとして、WEBデザインを手がけてきました。今後も顧客とコミュニケーションをとりながら、多くのサービスを提供できるエンジニアとしてスキルアップしていきたいと考えています。"
    }
  ]
};

beforeEach(() => {
  container = document.createElement("section");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render MemberIntro from data", () => {
  ReactDOM.render(<MemberIntro data={Data} />, container);
  const title = container.querySelector("h3");
  const description = container.querySelector("p");

  const itemsTitle = container.querySelectorAll(
    ".memberIntro__items > .card > .card__content >h3"
  );
  const itemsDescription = container.querySelectorAll(
    ".memberIntro__items > .card > .card__content >p"
  );
  const itemsImage = container.querySelectorAll(
    '.memberIntro__items > .card > img'
  );

  for (let item = 0; item < Data.items.length; item++) {
    expect(itemsTitle[item].textContent).toBe(Data.items[item].title);
    expect(itemsDescription[item].textContent).toBe(
      Data.items[item].description
    );
    expect(itemsImage[item].src).toMatch(
      new RegExp(Data.items[item].image.src)
    );
    expect(itemsImage[item].alt).toContain(Data.items[item].image.alt);
  }
  expect(title.textContent).toBe(Data.title);
  expect(description.textContent).toBe(Data.description);
});
