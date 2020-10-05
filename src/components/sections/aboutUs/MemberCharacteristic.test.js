import React from 'react';
import ReactDom from 'react-dom';
import './MemberCharacteristic.js';

let container;

const Data = {	
	title: "ITチームメンバーの特徴",
	description:  "私たちは第二世代のベトナム人ITエンジニアのチームです。",	
	items: {
	     title: "日本が好きで",
	     description: "技術が好きなメンバーです。日本人の仕事の仕方や新しい技術を積極的に学習しています。また、お互いを助け合うベトナム人の国民性もあり、チームワークが得意です。"
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

it("can render a component from data", () => {
    ReactDOM.render(<Card data={Data} />, container);
    const title = container.querySelector("Title");
    const description = container.querySelector("p");
    const items = container.querySelector("items");

    expect(title.textContent).toBe(Data.title);
    expect(description.textContent).toBe(Data.description);
    expect(items).toMatch(new RegExp(Data.items.title));
    expect(items).toContain(Data.items.description);
});