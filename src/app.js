import { createComponent, createElement } from './miniFramework';
import { Container } from './components/container.component';
import { Button } from './components/button.component';
import { Title } from './components/title.component';

export const App = createComponent(() => {
  return Container({
    children: [
      Title({
        text: 'Sample Title',
      }),
      createElement('h3', { style: { margin: '0', flexGrow: '1' } }, 'Some Title'),
      createElement(
        'button',
        {
          id: 'add-btn',
          onClick: () => alert('Add button clicked'),
        },
        'Add'
      ),
      Button({
        id: 'submit-btn',
        className: 'submit-btn',
        text: 'Submit',
        onClick: () => alert('Submit button clicked'),
      }),
      createElement(
        'div',
        { style: { width: 'auto' } },
        createElement('p', {}, 'Some text'),
        createElement('p', {}, 'Another text'),
        createElement('p', {}, 'A third text')
      ),
    ],
  });
});
