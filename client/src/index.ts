import './index.scss';
import { App } from './app';

window.addEventListener('DOMContentLoaded', () => {
  const element = document.body;
  const app = new App(element);

  app.init();
});
