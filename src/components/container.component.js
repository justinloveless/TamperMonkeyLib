import { createElement, createComponent } from '../miniFramework';

export const Container = createComponent(({ children }) =>
  createElement('div', { id: 'floating-list-container' }, ...children)
);
