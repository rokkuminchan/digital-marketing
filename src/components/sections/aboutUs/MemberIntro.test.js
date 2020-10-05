import React from 'react';
import ReactDOM from 'react-dom';
import MemberIntro from './MemberIntro.js';

let container;

const Data = {
    title: 'メンバー紹介',
    description:
        '我々は優秀なベトナム人エンジン中心としたチームです。レベルの高いべトナム大学の情報処理学科を卒業し、実務経験も豊富にあります。',
    items: {
        title: 'CTO 鈴木高弘',
        image: {
            src: '',
            alt: '',
        },
        description:
            'ITアーキテクトとして、様々な分野のプロジェクトを成功させた実績があります。オブジェクト指向の教育をする会社の立ち上げや教育コースの設計や技術者の育成も手掛けています。ワールドのITチームでは、これからIT業界で活躍するために必要なスキルを身に着ける為の教育プログラムを監修しています。ベトナムが大好きです。写真は、ベトナムの村のお寺に行った時のものです。',
    },
};

beforeEach(() => {
    container = document.createElement('section');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('can render MemberIntro from data', () => {
    ReactDOM.render(<MemberIntro data={Data} />, container);
    const title = container.querySelector('Title');
    const description = container.querySelector('p');
    const items = container.querySelector('Card');

    expect(title.textContent).toBe(Data.title);
    expect(description.textContent).toBe(Data.description);
    expect(items).toMatch(new RegExp(Data.items.title));
    expect(items).toContain(Data.items.description);
});
