import { Component } from '../../utils/component';
import { WEBUIButton } from '../web-ui/button/button';
import { WEBUIInput } from '../web-ui/input/input';
import { ICreateCar } from '../../interfaces/index';

export class OptionsInputs extends Component {
  private web_input: WEBUIInput;
  private web_inputColor: WEBUIInput;
  private btn: WEBUIButton;
  state = {
    name: '',
    color: '#000000',
  };

  constructor(
    parentNode: HTMLElement,
    buttonText: string,
    styles: string[] = [],
  ) {
    super(parentNode, 'div', ['garage-inputs']);
    const inputWrapper = new Component(this.element, 'div', ['garage-input']);
    this.web_input = new WEBUIInput(inputWrapper.element, 'text', [
      'garage-input',
    ]);
    this.web_input.getInputValue = (event) => this.updateState('name', event);
    this.web_inputColor = new WEBUIInput(
      this.element,
      'color',
      ['garage-color-input'],
      '#000000',
    );
    this.web_inputColor.getInputValue = (event) =>
      this.updateState('color', event);
    this.btn = new WEBUIButton(this.element, ['garage-button'], buttonText);
    this.btn.element.setAttribute('disabled', '');
    this.btn.onClickButton = () => {
      this.createCar(this.state);
      this.resetSettings();
    };
    this.element.classList.add(...styles);
  }

  createCar: (state: ICreateCar) => void = () => {};

  updateState(key: keyof ICreateCar, event: Event): void {
    const input = event.target as HTMLInputElement;
    this.state[key] = input.value;
    this.btn.element.toggleAttribute('disabled', this.state.name === '');
  }

  resetSettings(): void {
    this.state = {
      name: '',
      color: '#000000',
    };
    this.updateInputs();
  }

  updateInputs(): void {
    (this.web_input.element as HTMLInputElement).value = this.state.name;
    (this.web_inputColor.element as HTMLInputElement).value = this.state.color;

    this.btn.element.setAttribute('disabled', '');
  }
}
