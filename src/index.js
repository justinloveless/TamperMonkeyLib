import cssContent from './styles.css';
import { addStyles } from './miniFramework';
import { App } from './app';

console.log('Tampermonkey Script Started (using webpack)');
addStyles(cssContent);
document.body.appendChild(App());
