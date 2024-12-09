import { createElement, createComponent } from '../miniFramework';

export const Button = createComponent(({ id, text, onClick }) =>
  createElement('button', { id, onClick }, text)
);
