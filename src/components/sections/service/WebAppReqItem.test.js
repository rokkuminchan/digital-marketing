import React from 'react';
import ReactDOM from 'react-dom';
import WebAppReqItem from './WebAppReqItem';

let container;

const Data = {
  title: ['少人数先鋭であること', '(ピザ2枚ルール *)'],
};

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render a Row Items from data', () => {
  ReactDOM.render(<WebAppReqItem data={Data} />, container);
  const title = container.querySelectorAll('.web-app-req-item__title > h3');

  for (let item = 0; item < Data.title.length; item++) {
    expect(title[item].textContent).toBe(Data.title[item]);
  }
});
