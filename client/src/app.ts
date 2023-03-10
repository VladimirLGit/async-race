import { Router } from './router/index';
import { Component } from './utils/component';
import { Header } from './components/header/header';

export class App {
  private main;
  private router;

  constructor(private rootElement: HTMLElement) {
    const header = new Header(this.rootElement);
    this.main = new Component(this.rootElement, 'main', ['main']);
    this.router = new Router(this.main.element);
  }

  init(): void {
    this.router.initRouter();
  }
}
