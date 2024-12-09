import { createComponent } from './miniFramework';
import { Container } from './components/container.component';
import { Button } from './components/button.component';
import { Title } from './components/title.component';

export const App = createComponent(() => {
  return Container({
    children: [
      Title({
        text: 'Sample Title',
      }),
      Button({
        id: 'submit-btn',
        text: 'Submit',
        onClick: () => alert('Submit button clicked'),
      }),
    ],
  });
});
