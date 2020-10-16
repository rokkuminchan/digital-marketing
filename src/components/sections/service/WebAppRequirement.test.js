import React from 'react';
import ReactDOM from 'react-dom';
import WebAppRequirement from './WebAppRequirement';

let container;

const Data = {
  title: 'Webアプリケーション開発チームに求められる要件にとは',
  items: [
    {
      title: ['生産性と品質の高さ'],
      row: [
        {
          icon: {
            name: 'circle',
            type: 'FiCircle',
          },
          description: '生産性が高く、予算と納期の範囲内で製品を開発できること',
        },
      ],
    },
  ],
  image: {
    src: '../../images/service__servicePH.jpg',
    alt: '',
  },
  comment: [
    '* ピザ2枚ルールとは',
    'ピザ2枚ルールとはAmazonのジェフ・ベゾスが提唱したルールで、1つのチームはピザ2枚を囲める人数以下にしなければならないというものです',
  ],
};

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render a Appplication Comment from data', () => {
  ReactDOM.render(<WebAppRequirement data={Data} />, container);
  const comment = container.querySelectorAll(
    '.web-app-requirment > .web-app-requirment__comment > p'
  );

  for (let item = 0; item < Data.comment.length; item++) {
    expect(comment[item].textContent).toBe(Data.comment[item]);
  }
});
