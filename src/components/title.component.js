import { createElement, createComponent } from '../miniFramework';

export const Title = createComponent(({ text }) =>
  createElement('h3', { style: { margin: '0', flexGrow: '1' } }, text)
);
