import React from 'react';
import ReactDOM from 'react-dom';
import WebAppRequirement from './WebAppRequirement';

let container;

const Data = {
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
