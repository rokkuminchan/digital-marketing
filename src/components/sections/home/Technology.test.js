import React from 'react';
import ReactDOM from 'react-dom';
import Technology from './Technology';

let container;

const Data = {
  title: '',
  subtitle: '',
  image: {
    src: '',
    alt: '',
  },
  description: 'WorldのITチームお勧めの最新テクノロジーはこちら',
  link: {
    title: '',
    src: '',
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

it('can render a Technology from data', () => {
  ReactDOM.render(<Technology data={Data} />, container);
  const description = container.querySelector('.technology__description > p');

  expect(description.textContent).toBe(Data.description);
});
