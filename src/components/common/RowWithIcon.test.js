import React from 'react';
import ReactDOM from 'react-dom';
import RowWithIcon from './RowWithIcon';

let container;

const Data = {
  icon: {
    name: 'circle',
    type: 'FiCircle',
  },
  description: '生産性が高く、予算と納期の範囲内で製品を開発できること',
};

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render a Row With Icon from data', () => {
  ReactDOM.render(<RowWithIcon data={Data} />, container);
  const description = container.querySelector('p');
  const icon = container.querySelector('circle');

  expect(icon.nodeName).toMatch(Data.icon.name);
  expect(description.textContent).toBe(Data.description);
});
