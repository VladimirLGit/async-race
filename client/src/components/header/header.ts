import './header.scss';
import { Component } from '../../utils/component';

export class Header extends Component {
  private nvItems: Component[] = [];
  private linkToGarage: Component;
  private linkToWinners: Component;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['header']);
    this.linkToGarage = new Component(
      this.element,
      'a',
      ['nav__item'],
      'Garage',
    );
    this.linkToWinners = new Component(
      this.element,
      'a',
      ['nav__item'],
      'Winners',
    );
    this.linkToGarage.element.setAttribute('href', '#/');
    this.linkToWinners.element.setAttribute('href', '#/winners');
    this.nvItems = [this.linkToGarage, this.linkToWinners];
    window.addEventListener('hashchange', () =>
      this.updateActive(this.nvItems),
    );
    window.addEventListener('load', () => this.updateActive(this.nvItems));
  }

  private updateActive(navItems: Component[]): void {
    this.nvItems = navItems.map((item) => {
      item.element.classList.remove('nav__item--active');
      if (item.element.getAttribute('href') === window.location.hash) {
        item.element.classList.add('nav__item--active');
      }
      return item;
    });
  }
}
