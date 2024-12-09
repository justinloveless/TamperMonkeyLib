import { createElement, createComponent } from '../miniFramework';

export const Button = createComponent(({ id, className, text, onClick }) =>
  createElement('button', { id, className, onClick }, text)
);
