import './button.scss';
import { Component } from '../../../utils/component';

export class WEBUIButton extends Component {
  constructor(
    parentNode: HTMLElement,
    styles: string[] = [],
    content: string,
    disabled = false,
  ) {
    super(parentNode, 'button', ['btn'], content);
    this.element.classList.add(...styles);
    this.element.addEventListener('click', () => this.onClickButton());
    if (disabled) {
      this.setDisabled(true);
    }
  }

  onClickButton: () => void = () => {};

  setDisabled(type = false): void {
    this.element.toggleAttribute('disabled', type);
  }

  removeDisabled(): void {
    this.element.removeAttribute('disabled');
  }
}
